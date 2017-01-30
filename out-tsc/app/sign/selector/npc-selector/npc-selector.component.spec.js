import { async, TestBed } from '@angular/core/testing';
import { NpcSelectorComponent } from './npc-selector.component';
describe('NpcSelectorComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NpcSelectorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NpcSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/sign/selector/npc-selector/npc-selector.component.spec.js.map