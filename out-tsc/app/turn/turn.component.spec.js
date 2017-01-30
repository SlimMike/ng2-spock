import { async, TestBed } from '@angular/core/testing';
import { TurnComponent } from './turn.component';
describe('TurnComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TurnComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TurnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/turn/turn.component.spec.js.map