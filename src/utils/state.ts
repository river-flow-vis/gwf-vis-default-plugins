import type { SharedStates } from "gwf-vis-host";
import type {
  CallerPlugin,
  DimensionValueDict,
  LocationPin,
  LocationSelection,
} from "./basic";
import type { DataFrom, Variable, VariableWithDimensions } from "./data";
import type { ColorSchemeDefinition } from "./color";

export type GWFVisDefaultPluginSharedStates = SharedStates & {
  "gwf-default.currentDataSource"?: string;
  "gwf-default.currentVariableId"?: number;
  "gwf-default.dimensionValueDict"?: DimensionValueDict;
  "gwf-default.locationSelection"?: LocationSelection;
  "gwf-default.locationPins"?: LocationPin[];
} & {
  "gwf-default.cache.availableVariablesDict"?: {
    [dataSource: string]: VariableWithDimensions[] | undefined;
  };
};

export function obtainObjectChangedPropertyNameSet<T = any>(
  oldObject: any,
  newObject: any
) {
  let changedProps = new Set<keyof T | string>();
  for (let key in oldObject) {
    if (!(key in newObject)) {
      changedProps.add(key);
    } else {
      if (oldObject[key] !== newObject[key]) {
        changedProps.add(key);
      }
    }
  }
  for (let key in newObject) {
    if (!(key in oldObject)) {
      changedProps.add(key);
    }
  }
  return changedProps;
}

export function obtainCurrentDataSource(
  dataFrom?: DataFrom,
  sharedStates?: GWFVisDefaultPluginSharedStates
) {
  return (
    dataFrom?.dataSource ?? sharedStates?.["gwf-default.currentDataSource"]
  );
}

export async function obtainCurrentVariable(
  dataSource?: string,
  dataFrom?: DataFrom,
  sharedStates?: GWFVisDefaultPluginSharedStates,
  callerPlugin?: CallerPlugin | undefined
) {
  const currentDataSource =
    dataSource ?? obtainCurrentDataSource(dataFrom, sharedStates);
  let variable: Variable | undefined;
  if (dataFrom?.variableName) {
    variable = (
      (await callerPlugin?.queryDataDelegate?.(currentDataSource ?? "", {
        for: "variables",
        filter: { names: [dataFrom.variableName] },
      } as any)) as any
    )?.at(0);
  }
  const variableId =
    variable?.id ?? sharedStates?.["gwf-default.currentVariableId"];
  if (variableId == null) {
    return;
  }
  if (!variable) {
    variable = (
      (await callerPlugin?.queryDataDelegate?.(currentDataSource ?? "", {
        for: "variables",
        filter: { ids: [variableId] },
      } as any)) as any
    )?.at(0);
  }
  return variable;
}

export async function obtainCurrentColorScheme(
  dataSource?: string,
  variable?: Variable,
  dataFrom?: DataFrom,
  colorScheme?: {
    [dataSource: string]: { [variable: string]: ColorSchemeDefinition };
  },
  sharedStates?: GWFVisDefaultPluginSharedStates,
  callerPlugin?: CallerPlugin | undefined
) {
  const currentDataSource =
    dataSource ?? obtainCurrentDataSource(dataFrom, sharedStates);
  const currentVariable =
    variable ??
    (await obtainCurrentVariable(
      dataSource,
      dataFrom,
      sharedStates,
      callerPlugin
    ));
  if (!currentDataSource || !currentVariable) {
    return;
  }
  return (
    colorScheme?.[currentDataSource]?.[currentVariable.name] ??
    colorScheme?.[currentDataSource]?.[""] ??
    colorScheme?.[""]
  );
}
