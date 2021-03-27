import React from 'react';
import { Table } from 'react-bootstrap';
import '../Footer.css'

const list1 = ["About Us", "Delivery Information","Privacy Policy","Terms & Conditions"];
const list2 = ["Contact Us", "Returns", "Site Map"];
const list3 = ["Brands", "Gift Certificates","Affiliate","Specials"];
const list4 = ["My Account", "order History","WishList","Newsletter"];
const list5 = ["Powered By OpenCart","Your Story"];

class Footer extends React.Component{
render() {
    return (

<div class="container">
<div class="row">
<div class="col-sm-3">
<h5>Information</h5>
<ul class="list-unstyled">
<li><a href="#">About Us</a></li>
<li><a href="#">Delivery Information</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms &amp; Conditions</a></li>
</ul>
</div>
<div class="col-sm-3">
<h5>Customer Service</h5>
<ul class="list-unstyled">
<li><a href="#">Contact Us</a></li>
<li><a href="#">Returns</a></li>
<li><a href="#">Site Map</a></li>
</ul>
</div>
<div class="col-sm-3">
<h5>Extras</h5>
<ul class="list-unstyled">
<li><a href="#">Brands</a></li>
<li><a href="#">Gift Certificates</a></li>
<li><a href="#">Affiliate</a></li>
<li><a href="#">Specials</a></li>
</ul>
</div>
<div class="col-sm-3">
<h5>My Account</h5>
<ul class="list-unstyled">
<li><a href="#">My Account</a></li>
<li><a href="#">Order History</a></li>
<li><a href="#">Wish List</a></li>
<li><a href="#">Newsletter</a></li>
</ul>
</div>
</div>
</div>
);
}
}
export default Footer;