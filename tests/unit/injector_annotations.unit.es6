describe('Space.Injector annotations', function () {

  describe('Dependency annotation', function () {

    it('adds the dependency to the Dependencies map', function () {
      @Dependency('propertyName1', 'dependencyName1')
      @Dependency('propertyName2', 'dependencyName2')
      class FixtureClass {}

      expect(FixtureClass.prototype.Dependencies).to.deep.equal({
        'propertyName1': 'dependencyName1',
        'propertyName2': 'dependencyName2'
      });
    });

  })

  describe('RequireModule annotation', function () {

    it('adds the required module to the RequiredModules array', function () {
      @RequireModule('fooModule1')
      @RequireModule('fooModule2')
      class FixtureClass {}

      expect(FixtureClass.prototype.RequiredModules).to.contain('fooModule1');
      expect(FixtureClass.prototype.RequiredModules).to.contain('fooModule2');
    });

  });

});

