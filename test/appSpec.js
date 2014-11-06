define(['jquery', 'underscore', 'app', 'Utils'], function($, _, App, Utils) 
{
    describe('just checking', function() {

        beforeEach(function() {
            $('body').append("<p>" + this.description + "</p>");
        });

        afterEach(function() {
            Utils.log("TEST: " + this.description);
            Utils.render(window, this.id);
        });
 
        it('works for app', function() {
            var el = $('<div></div>');
            var app = new App(el);
            app.render();
            expect(el.text()).toEqual('require.js up and running');
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1, 2, 3])).toEqual(3);

        });

        it("test reduce object to map", function() {
            //map reduce function with underscore.js  
            var objectGiven = [{
                ID: 1,
                name: "A"
            }, {
                ID: 2,
                name: "B"
            }];

            var expectedObject = {
                1: "A",
                2: "B"
            };

            var result = _.reduce(objectGiven, function(to, from) {
                to[from.ID] = from.name;
                return to
            }, {});

            expect(expectedObject).toEqual(result);
        });

        it("jquery matchers test", function() {
            var el = $('<div class="class1 class2"></div>');
            expect(el.hasClass("class2")).toBe(true);
        });
    });
});