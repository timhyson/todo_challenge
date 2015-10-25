describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty task input', function() {
    expect(ctrl.taskInput).toBeUndefined();
  });

  describe('when adding a task', function() {

    var tasks = [
      { task: 'buy milk',
        priority: 'HIGH',
     },
      { task: 'wash car',
        priority: 'LOW',
    },
    ];

    it('displays tasks', function() {
      ctrl.taskInput = 'call nan';
      ctrl.addTask();
      expect(ctrl.taskList.tasks).toEqual(tasks);
    });
  });

});
