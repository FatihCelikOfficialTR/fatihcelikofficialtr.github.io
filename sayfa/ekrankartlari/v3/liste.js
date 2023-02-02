var
  filters = {
    user: null,
    status: null,
    milestone: null,
    priority: null,
    minerbonus: null
  };

function updateFilters() {
  $('.task-list-row').hide().filter(function() {
    var
      self = $(this),
      result = true; // not guilty until proven guilty
    
    Object.keys(filters).forEach(function (filter) {
      if (filters[filter] && (filters[filter] != 'Hepsi') && (filters[filter] != 'Hepsi')) {
        result = result && filters[filter] === self.data(filter);
      }
    });

    return result;
  }).show();
}

function changeFilter(filterName) {
  filters[filterName] = this.value;
  updateFilters();
}

// Assigned User Dropdown Filter
$('#assigned-user-filter').on('change', function() {
  changeFilter.call(this, 'user');
});

// Task Status Dropdown Filter
$('#status-filter').on('change', function() {
  changeFilter.call(this, 'status');
});

// Task Milestone Dropdown Filter
$('#milestone-filter').on('change', function() {
  changeFilter.call(this, 'milestone');
});

// Task Priority Dropdown Filter
$('#priority-filter').on('change', function() {
  changeFilter.call(this, 'priority');
});

// Task Tags Dropdown Filter
$('#minerbonus-filter').on('change', function() {
  changeFilter.call(this, 'minerbonus');
});

/*
future use for a text input filter
$('#search').on('click', function() {
    $('.box').hide().filter(function() {
        return $(this).data('order-number') == $('#search-criteria').val().trim();
    }).show();
});*/