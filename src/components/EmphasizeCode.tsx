import { EmphasizeElements, IModelApp } from "@itwin/core-frontend";
import { Queryprops } from "./querycompt";
import { Id64Array } from "@itwin/core-bentley";
import { ColorDef, FeatureOverrideType } from "@itwin/core-common";

export interface QueryError {
  id: number;
  message: string;
}

export const emphasizeElements = async (elements: Id64Array): Promise<void> => {
  const view = IModelApp.viewManager.selectedView;
  if (undefined === view) {
    return;
  }

  const emphasize = EmphasizeElements.getOrCreate(view);
  emphasize.clearEmphasizedElements(view);
  emphasize.clearOverriddenElements(view);
  emphasize.overrideElements(elements, view, ColorDef.white, FeatureOverrideType.ColorOnly, true);
  emphasize.isolateElements(elements, view, true);
}

export const updateEmphasis = async (queries: Queryprops[]): Promise<QueryError[]> => {
  const results:QueryError[] = [];

  const view = IModelApp.viewManager.selectedView;
  if (undefined === view) {
    return results;
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
        results.push({id: item.id, message: e.message});
        console.log (e.message)
    }
    }
  }
  return results;
}

export const clearEmphasis = () => {
  const view = IModelApp.viewManager.selectedView;
  if (undefined === view) {
    return;
  }

  const emphasize = EmphasizeElements.getOrCreate(view);
  emphasize.clearEmphasizedElements(view);
  emphasize.clearOverriddenElements(view);
  emphasize.clearIsolatedElements(view);
}