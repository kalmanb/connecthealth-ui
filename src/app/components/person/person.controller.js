'use strict';

class PersonCtrl {
    constructor () {
        this.people = [
            {
                'name': 'John Smith',
                'dob': '2133',
                'mobile': '021 5333 342'
            },
            {
                'name': 'Sarah Jones',
                'dob': '4441',
                'mobile': '021 555 342'
            }
        ];

        this.selected     = this.people[0];
        this.selectPerson   = this.selectPerson;
        // self.toggleList   = toggleUsersList;
        // self.showContactOptions  = showContactOptions;
    }

    selectPerson (person) {
      // this.selected = angular.isNumber(user) ? $scope.users[user] : user;
      this.selected = person;
      // this.toggleList();
    }

    // update(person) {
    //     console.log('updated');
    // }
}

PersonCtrl.$inject = [];

export default PersonCtrl;
