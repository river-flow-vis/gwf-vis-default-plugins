/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { GloablInfo } from "./utils/gwf-vis-plugin";
import { ColorSchemeDefinition } from "./utils/variable-color-scheme";
export namespace Components {
    interface GwfVisPluginDataFetcher {
        "fetchData": (query: any) => Promise<any>;
        "obtainHeader": () => Promise<string>;
        "remoteSqlRunnerUrl": string;
        "sqliteWorkerUrl": string;
    }
    interface GwfVisPluginDimensionControl {
        "dataSource": string;
        "delegateOfFetchingData": (query: any) => Promise<any>;
        "delegateOfUpdatingGlobalInfo": (gloablInfo: GloablInfo) => void;
        "globalInfo": GloablInfo;
        "obtainHeader": () => Promise<string>;
    }
    interface GwfVisPluginGeojsonLayer {
        "active": boolean;
        "colorScheme"?: { [variableName: string]: ColorSchemeDefinition };
        "dataSource": string;
        "delegateOfAddingToMap": (layer: L.Layer, name: string, type: 'base-layer' | 'overlay', active?: boolean) => void;
        "delegateOfFetchingData": (query: any) => any;
        "delegateOfRemovingFromMap": (layer: L.Layer) => void;
        "delegateOfUpdatingGlobalInfo": (gloablInfoDict: GloablInfo) => void;
        "dimensions"?: { [dimension: string]: number };
        "globalInfo": GloablInfo;
        "layerName": string;
        "leaflet": typeof globalThis.L;
        "obtainHeader": () => Promise<string>;
        "options"?: L.GeoJSONOptions;
        "type": 'base-layer' | 'overlay';
        "variableName"?: string;
    }
    interface GwfVisPluginLegend {
        "colorScheme"?: { [variableName: string]: ColorSchemeDefinition };
        "dataSource": string;
        "delegateOfFetchingData": (query: any) => any;
        "delegateOfUpdatingGlobalInfo": (gloablInfoDict: GloablInfo) => void;
        "dimensions"?: { [dimension: string]: number };
        "globalInfo": GloablInfo;
        "obtainHeader": () => Promise<string>;
        "variableName"?: string;
    }
    interface GwfVisPluginLineChart {
        "dataSource": string;
        "delegateOfFetchingData": (query: any) => Promise<any>;
        "delegateOfUpdatingGlobalInfo": (gloablInfoDict: GloablInfo) => void;
        "dimension": string;
        "globalInfo": GloablInfo;
        "obtainHeader": () => Promise<string>;
        "variableNames"?: string[];
    }
    interface GwfVisPluginMetadata {
        "delegateOfFetchingData": (query: any) => any;
        "delegateOfUpdatingGlobalInfo": (gloablInfoDict: GloablInfo) => void;
        "globalInfo": GloablInfo;
        "obtainHeader": () => Promise<string>;
    }
    interface GwfVisPluginRadarChart {
        "dataSource": string;
        "delegateOfFetchingData": (query: any) => Promise<any>;
        "delegateOfUpdatingGlobalInfo": (gloablInfoDict: GloablInfo) => void;
        "dimensions"?: { [dimension: string]: number };
        "globalInfo": GloablInfo;
        "obtainHeader": () => Promise<string>;
        "variableNames"?: string[];
    }
    interface GwfVisPluginSelection {
        "delegateOfUpdatingGlobalInfo": (gloablInfoDict: GloablInfo) => void;
        "globalInfo": GloablInfo;
        "obtainHeader": () => Promise<string>;
    }
    interface GwfVisPluginTileLayer {
        "active": boolean;
        "delegateOfAddingToMap": (layer: L.Layer, name: string, type: 'base-layer' | 'overlay', active?: boolean) => void;
        "delegateOfRemovingFromMap": (layer: L.Layer) => void;
        "globalInfo": GloablInfo;
        "layerName": string;
        "leaflet": typeof globalThis.L;
        "obtainHeader": () => Promise<string>;
        "options"?: L.TileLayerOptions;
        "type": 'base-layer' | 'overlay';
        "urlTemplate": string;
    }
    interface GwfVisPluginVariableControl {
        "dataSource": string;
        "delegateOfFetchingData": (query: any) => Promise<any>;
        "delegateOfUpdatingGlobalInfo": (gloablInfoDict: GloablInfo) => void;
        "globalInfo": GloablInfo;
        "obtainHeader": () => Promise<string>;
    }
}
declare global {
    interface HTMLGwfVisPluginDataFetcherElement extends Components.GwfVisPluginDataFetcher, HTMLStencilElement {
    }
    var HTMLGwfVisPluginDataFetcherElement: {
        prototype: HTMLGwfVisPluginDataFetcherElement;
        new (): HTMLGwfVisPluginDataFetcherElement;
    };
    interface HTMLGwfVisPluginDimensionControlElement extends Components.GwfVisPluginDimensionControl, HTMLStencilElement {
    }
    var HTMLGwfVisPluginDimensionControlElement: {
        prototype: HTMLGwfVisPluginDimensionControlElement;
        new (): HTMLGwfVisPluginDimensionControlElement;
    };
    interface HTMLGwfVisPluginGeojsonLayerElement extends Components.GwfVisPluginGeojsonLayer, HTMLStencilElement {
    }
    var HTMLGwfVisPluginGeojsonLayerElement: {
        prototype: HTMLGwfVisPluginGeojsonLayerElement;
        new (): HTMLGwfVisPluginGeojsonLayerElement;
    };
    interface HTMLGwfVisPluginLegendElement extends Components.GwfVisPluginLegend, HTMLStencilElement {
    }
    var HTMLGwfVisPluginLegendElement: {
        prototype: HTMLGwfVisPluginLegendElement;
        new (): HTMLGwfVisPluginLegendElement;
    };
    interface HTMLGwfVisPluginLineChartElement extends Components.GwfVisPluginLineChart, HTMLStencilElement {
    }
    var HTMLGwfVisPluginLineChartElement: {
        prototype: HTMLGwfVisPluginLineChartElement;
        new (): HTMLGwfVisPluginLineChartElement;
    };
    interface HTMLGwfVisPluginMetadataElement extends Components.GwfVisPluginMetadata, HTMLStencilElement {
    }
    var HTMLGwfVisPluginMetadataElement: {
        prototype: HTMLGwfVisPluginMetadataElement;
        new (): HTMLGwfVisPluginMetadataElement;
    };
    interface HTMLGwfVisPluginRadarChartElement extends Components.GwfVisPluginRadarChart, HTMLStencilElement {
    }
    var HTMLGwfVisPluginRadarChartElement: {
        prototype: HTMLGwfVisPluginRadarChartElement;
        new (): HTMLGwfVisPluginRadarChartElement;
    };
    interface HTMLGwfVisPluginSelectionElement extends Components.GwfVisPluginSelection, HTMLStencilElement {
    }
    var HTMLGwfVisPluginSelectionElement: {
        prototype: HTMLGwfVisPluginSelectionElement;
        new (): HTMLGwfVisPluginSelectionElement;
    };
    interface HTMLGwfVisPluginTileLayerElement extends Components.GwfVisPluginTileLayer, HTMLStencilElement {
    }
    var HTMLGwfVisPluginTileLayerElement: {
        prototype: HTMLGwfVisPluginTileLayerElement;
        new (): HTMLGwfVisPluginTileLayerElement;
    };
    interface HTMLGwfVisPluginVariableControlElement extends Components.GwfVisPluginVariableControl, HTMLStencilElement {
    }
    var HTMLGwfVisPluginVariableControlElement: {
        prototype: HTMLGwfVisPluginVariableControlElement;
        new (): HTMLGwfVisPluginVariableControlElement;
    };
    interface HTMLElementTagNameMap {
        "gwf-vis-plugin-data-fetcher": HTMLGwfVisPluginDataFetcherElement;
        "gwf-vis-plugin-dimension-control": HTMLGwfVisPluginDimensionControlElement;
        "gwf-vis-plugin-geojson-layer": HTMLGwfVisPluginGeojsonLayerElement;
        "gwf-vis-plugin-legend": HTMLGwfVisPluginLegendElement;
        "gwf-vis-plugin-line-chart": HTMLGwfVisPluginLineChartElement;
        "gwf-vis-plugin-metadata": HTMLGwfVisPluginMetadataElement;
        "gwf-vis-plugin-radar-chart": HTMLGwfVisPluginRadarChartElement;
        "gwf-vis-plugin-selection": HTMLGwfVisPluginSelectionElement;
        "gwf-vis-plugin-tile-layer": HTMLGwfVisPluginTileLayerElement;
        "gwf-vis-plugin-variable-control": HTMLGwfVisPluginVariableControlElement;
    }
}
declare namespace LocalJSX {
    interface GwfVisPluginDataFetcher {
        "remoteSqlRunnerUrl"?: string;
        "sqliteWorkerUrl"?: string;
    }
    interface GwfVisPluginDimensionControl {
        "dataSource"?: string;
        "delegateOfFetchingData"?: (query: any) => Promise<any>;
        "delegateOfUpdatingGlobalInfo"?: (gloablInfo: GloablInfo) => void;
        "globalInfo"?: GloablInfo;
    }
    interface GwfVisPluginGeojsonLayer {
        "active"?: boolean;
        "colorScheme"?: { [variableName: string]: ColorSchemeDefinition };
        "dataSource"?: string;
        "delegateOfAddingToMap"?: (layer: L.Layer, name: string, type: 'base-layer' | 'overlay', active?: boolean) => void;
        "delegateOfFetchingData"?: (query: any) => any;
        "delegateOfRemovingFromMap"?: (layer: L.Layer) => void;
        "delegateOfUpdatingGlobalInfo"?: (gloablInfoDict: GloablInfo) => void;
        "dimensions"?: { [dimension: string]: number };
        "globalInfo"?: GloablInfo;
        "layerName"?: string;
        "leaflet"?: typeof globalThis.L;
        "options"?: L.GeoJSONOptions;
        "type"?: 'base-layer' | 'overlay';
        "variableName"?: string;
    }
    interface GwfVisPluginLegend {
        "colorScheme"?: { [variableName: string]: ColorSchemeDefinition };
        "dataSource"?: string;
        "delegateOfFetchingData"?: (query: any) => any;
        "delegateOfUpdatingGlobalInfo"?: (gloablInfoDict: GloablInfo) => void;
        "dimensions"?: { [dimension: string]: number };
        "globalInfo"?: GloablInfo;
        "variableName"?: string;
    }
    interface GwfVisPluginLineChart {
        "dataSource"?: string;
        "delegateOfFetchingData"?: (query: any) => Promise<any>;
        "delegateOfUpdatingGlobalInfo"?: (gloablInfoDict: GloablInfo) => void;
        "dimension"?: string;
        "globalInfo"?: GloablInfo;
        "variableNames"?: string[];
    }
    interface GwfVisPluginMetadata {
        "delegateOfFetchingData"?: (query: any) => any;
        "delegateOfUpdatingGlobalInfo"?: (gloablInfoDict: GloablInfo) => void;
        "globalInfo"?: GloablInfo;
    }
    interface GwfVisPluginRadarChart {
        "dataSource"?: string;
        "delegateOfFetchingData"?: (query: any) => Promise<any>;
        "delegateOfUpdatingGlobalInfo"?: (gloablInfoDict: GloablInfo) => void;
        "dimensions"?: { [dimension: string]: number };
        "globalInfo"?: GloablInfo;
        "variableNames"?: string[];
    }
    interface GwfVisPluginSelection {
        "delegateOfUpdatingGlobalInfo"?: (gloablInfoDict: GloablInfo) => void;
        "globalInfo"?: GloablInfo;
    }
    interface GwfVisPluginTileLayer {
        "active"?: boolean;
        "delegateOfAddingToMap"?: (layer: L.Layer, name: string, type: 'base-layer' | 'overlay', active?: boolean) => void;
        "delegateOfRemovingFromMap"?: (layer: L.Layer) => void;
        "globalInfo"?: GloablInfo;
        "layerName"?: string;
        "leaflet"?: typeof globalThis.L;
        "options"?: L.TileLayerOptions;
        "type"?: 'base-layer' | 'overlay';
        "urlTemplate"?: string;
    }
    interface GwfVisPluginVariableControl {
        "dataSource"?: string;
        "delegateOfFetchingData"?: (query: any) => Promise<any>;
        "delegateOfUpdatingGlobalInfo"?: (gloablInfoDict: GloablInfo) => void;
        "globalInfo"?: GloablInfo;
    }
    interface IntrinsicElements {
        "gwf-vis-plugin-data-fetcher": GwfVisPluginDataFetcher;
        "gwf-vis-plugin-dimension-control": GwfVisPluginDimensionControl;
        "gwf-vis-plugin-geojson-layer": GwfVisPluginGeojsonLayer;
        "gwf-vis-plugin-legend": GwfVisPluginLegend;
        "gwf-vis-plugin-line-chart": GwfVisPluginLineChart;
        "gwf-vis-plugin-metadata": GwfVisPluginMetadata;
        "gwf-vis-plugin-radar-chart": GwfVisPluginRadarChart;
        "gwf-vis-plugin-selection": GwfVisPluginSelection;
        "gwf-vis-plugin-tile-layer": GwfVisPluginTileLayer;
        "gwf-vis-plugin-variable-control": GwfVisPluginVariableControl;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gwf-vis-plugin-data-fetcher": LocalJSX.GwfVisPluginDataFetcher & JSXBase.HTMLAttributes<HTMLGwfVisPluginDataFetcherElement>;
            "gwf-vis-plugin-dimension-control": LocalJSX.GwfVisPluginDimensionControl & JSXBase.HTMLAttributes<HTMLGwfVisPluginDimensionControlElement>;
            "gwf-vis-plugin-geojson-layer": LocalJSX.GwfVisPluginGeojsonLayer & JSXBase.HTMLAttributes<HTMLGwfVisPluginGeojsonLayerElement>;
            "gwf-vis-plugin-legend": LocalJSX.GwfVisPluginLegend & JSXBase.HTMLAttributes<HTMLGwfVisPluginLegendElement>;
            "gwf-vis-plugin-line-chart": LocalJSX.GwfVisPluginLineChart & JSXBase.HTMLAttributes<HTMLGwfVisPluginLineChartElement>;
            "gwf-vis-plugin-metadata": LocalJSX.GwfVisPluginMetadata & JSXBase.HTMLAttributes<HTMLGwfVisPluginMetadataElement>;
            "gwf-vis-plugin-radar-chart": LocalJSX.GwfVisPluginRadarChart & JSXBase.HTMLAttributes<HTMLGwfVisPluginRadarChartElement>;
            "gwf-vis-plugin-selection": LocalJSX.GwfVisPluginSelection & JSXBase.HTMLAttributes<HTMLGwfVisPluginSelectionElement>;
            "gwf-vis-plugin-tile-layer": LocalJSX.GwfVisPluginTileLayer & JSXBase.HTMLAttributes<HTMLGwfVisPluginTileLayerElement>;
            "gwf-vis-plugin-variable-control": LocalJSX.GwfVisPluginVariableControl & JSXBase.HTMLAttributes<HTMLGwfVisPluginVariableControlElement>;
        }
    }
}
