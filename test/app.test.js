import { reducer } from '../src/app';

describe('App test', function() {
    it("Has initial greeting", function() {
        expect(reducer(undefined, {}).greeting).to.eql('None!');
    });
});
