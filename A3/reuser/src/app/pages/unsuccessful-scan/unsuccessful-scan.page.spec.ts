import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnsuccessfulScanPage } from './unsuccessful-scan.page';

describe('UnsuccessfulScanPage', () => {
  let component: UnsuccessfulScanPage;
  let fixture: ComponentFixture<UnsuccessfulScanPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsuccessfulScanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnsuccessfulScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
