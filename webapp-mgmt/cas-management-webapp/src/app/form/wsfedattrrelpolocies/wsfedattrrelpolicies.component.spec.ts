import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsfedattrrelpoliciesComponent } from './wsfedattrrelpolicies.component';
import {FormModule} from "../form.module";
import {SharedModule} from "../../shared/shared.module";
import {Messages} from "../../messages";
import {FormsModule} from "@angular/forms";
import {FormData, Data} from "../../../domain/form";

describe('WsfedattrrelpoliciesComponent', () => {
  let component: WsfedattrrelpoliciesComponent;
  let fixture: ComponentFixture<WsfedattrrelpoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, SharedModule ],
      declarations: [ WsfedattrrelpoliciesComponent ],
      providers: [Messages]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsfedattrrelpoliciesComponent);
    component = fixture.componentInstance;
    component.formData = new FormData();
    component.serviceData = new Data();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
