import { SubjectComponent } from './subject.component'
import { TestBed, async } from '@angular/core/testing';

describe('SubjectComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubjectComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SubjectComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-youtube-search'`, () => {
    const fixture = TestBed.createComponent(SubjectComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-youtube-search');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SubjectComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-youtube-search!');
  });
})