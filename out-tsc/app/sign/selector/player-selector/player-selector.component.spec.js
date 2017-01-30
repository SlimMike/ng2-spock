import { async, TestBed } from '@angular/core/testing';
import { PlayerSelectorComponent } from './player-selector.component';
describe('PlayerSelectorComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PlayerSelectorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PlayerSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/sign/selector/player-selector/player-selector.component.spec.js.map