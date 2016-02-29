import { reducer } from '../src/app';

describe('App test', function() {
    it("Has initial greeting", function() {
        expect(reducer({}).greeting).to.eql('None!');
    });
});
