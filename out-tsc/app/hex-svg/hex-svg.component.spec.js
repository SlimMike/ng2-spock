import { async, TestBed } from '@angular/core/testing';
import { HexSvgComponent } from './hex-svg.component';
describe('HexSvgComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HexSvgComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HexSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/hex-svg/hex-svg.component.spec.js.map