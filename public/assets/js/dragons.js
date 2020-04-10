$(function() {
    $(".change-evil").on("click", function(event) {
      var id = $(this).data("id");
      var newEvil = $(this).data("newevil");
  
      var newmorality = {
        evil: newEvil
      };
  
      
      $.ajax("/api/dragon/" + id, {
        type: "PUT",
        data: newmorality
      }).then(
        function() {
          console.log("changed morality to", newmorality);

          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newDragon = {
        name: $("#ca").val().trim(),
        evil: $("[name=evil]:checked").val().trim()
      };
  
      $.ajax("/api/dragon", {
        type: "POST",
        data: newDragon
      }).then(
        function() {
          console.log("created new dragon");
          location.reload();
        }
      );
    });
  
    $(".delete-dragon").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/dragons/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted dragon", id);
          location.reload();
        }
      );
    });
  });