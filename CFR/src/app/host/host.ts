import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Message } from '../message/message';

@Component({
  selector: 'app-host',
  imports: [],
  templateUrl: './host.html',
  styleUrl: './host.css'
})
export class Hostcomponent {
    @ViewChild('container',{read: ViewContainerRef,}) container!:ViewContainerRef;
    constructor(private resolver:ComponentFactoryResolver){}
    loadComponent(){
      const factory = this.resolver.resolveComponentFactory(Message)
      const componentRef = this.container.createComponent(factory);
      componentRef.instance.message = "Dynamic message loaded"
    }
}
