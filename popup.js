document.addEventListener('DOMContentLoaded', function() {
    var searchQuery = document.getElementById('searchQuery');
    
    var performSearch = function() {
      var query = searchQuery.value;
      if (query) {
        var youtubeUrl = 'https://www.youtube.com/results?search_query=';
        var encodedQuery = encodeURIComponent(query);
        var finalUrl = youtubeUrl + encodedQuery;
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          var tab = tabs[0];
          chrome.tabs.update(tab.id, { url: finalUrl });
        });
      }
    };
    
    searchQuery.addEventListener('keydown', function(event) {
      if (event.keyCode === 13) {
        performSearch();
      }
    });
    
    var searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', performSearch);
  });
  