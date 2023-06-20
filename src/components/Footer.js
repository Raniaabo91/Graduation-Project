import React from "react";

function Footer() {
  return (
             // Lägger till text med aktuellt år och "Klimatsinformation"

       
        <footer class="main-footer">  
		<p>Copyright &copy;{new Date().getFullYear()}by Klimatsinformation</p>
	</footer>
  );
}

export default Footer;