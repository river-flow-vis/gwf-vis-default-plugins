import { Component, Host, h, ComponentInterface, Prop, Method, State } from '@stencil/core';
import { GloablInfoDict, GwfVisPluginControl } from '../../utils/gwf-vis-plugin';

@Component({
  tag: 'gwf-vis-plugin-metadata',
  styleUrl: 'gwf-vis-plugin-metadata.css',
  shadow: true,
})
export class GwfVisPluginMetadata implements ComponentInterface, GwfVisPluginControl {
  static readonly __PLUGIN_TAG_NAME__ = 'gwf-vis-plugin-metadata';
  static readonly __PLUGIN_TYPE__ = 'control';

  @State() metadata: any;

  @Prop() leaflet: typeof globalThis.L;
  @Prop() fetchingDataDelegate: (query: any) => any;
  @Prop() globalInfoDict: GloablInfoDict;
  @Prop() updatingGlobalInfoDelegate: (gloablInfoDict: GloablInfoDict) => void;

  @Method()
  async obtainHeader() {
    return 'Metadata';
  }

  async componentWillRender() {
    this.metadata = await this.fetchingDataDelegate?.({
      type: 'metadata',
      for: {
        dataset: this.globalInfoDict?.userSelectionDict?.dataset,
        location: this.globalInfoDict?.userSelectionDict?.location,
      },
    });
  }

  render() {
    return (
      <Host>
        <div part="content">
          {Object.entries(this.metadata || {})?.map(([key, value]) => (
            <div>
              <span>
                <b>{key.toString()}</b>
              </span>
              <div innerHTML={value.toString()}></div>
              <hr />
            </div>
          ))}
        </div>
      </Host>
    );
  }
}