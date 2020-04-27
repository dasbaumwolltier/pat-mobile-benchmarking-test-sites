import { Injectable, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicLoaderService {
  factoryResolver: ComponentFactoryResolver
  rootViewContainer: ViewContainerRef

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver
  }

  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  addTabComponent() {
    const factory = this.factoryResolver
      .resolveComponentFactory(TabComponent)

    const component = factory
      .create(this.rootViewContainer.parentInjector)

      this.rootViewContainer.insert(component.hostView)
  }
}
