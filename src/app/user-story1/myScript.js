<script>
fucntion myFunction() {
$(".dropdown-menu li a").click(function(){
  
  $(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
})}
</script>