import { EmphasizeElements, IModelApp } from "@itwin/core-frontend";
import { Queryprops } from "./querycompt";
import { Id64Array } from "@itwin/core-bentley";
import { FeatureOverrideType } from "@itwin/core-common";

export const updateEmphasis = async (queries: Queryprops[]) => {
  const view = IModelApp.viewManager.selectedView;
  if (undefined === view) {
    return;
  }

  const emphasize = EmphasizeElements.getOrCreate(view);
  emphasize.clearEmphasizedElements(view);
  emphasize.clearOverriddenElements(view);

  for (const item of queries) {
    if (item.enabled) {
      const idsToEmphasize: Id64Array = []
      try {
      for await (const row of view.iModel.query(item.query)) {
        const id = row[0];
        if (undefined !== id) {
          idsToEmphasize.push(id);
        }
      }
      emphasize.overrideElements(idsToEmphasize, view, item.color, FeatureOverrideType.ColorOnly, false);
    } catch (e: any) {
        console.log (e.message)
    }
    }
  }
}

export const clearEmphasis = async () => {
  const view = IModelApp.viewManager.selectedView;
  if (undefined === view) {
    return;
  }

  const emphasize = EmphasizeElements.getOrCreate(view);
  emphasize.clearEmphasizedElements(view);
  emphasize.clearOverriddenElements(view);
}