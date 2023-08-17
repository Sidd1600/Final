// import React, {useEffect} from "react";
// import "./FAQPage.css"
// const FAQPage=({setNavbar})=>{
//   useEffect(()=>{
//     setNavbar();
//   },[])
//     return(
//         <div className="faq-page-container">
//             <h1>Frequqently Asked Questions</h1>
//             <div class="accordion" id="accordionPanelsStayOpenExample">
//                 <div class="accordion-item">
//                   <h2 class="accordion-header">
//                     <button class="accordion-button bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
//                       Accordion Item #1
//                     </button>
//                   </h2>
//                   <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
//                     <div class="accordion-body">
//                       <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                     </div>
//                   </div>
//                 </div>
//                 <div class="accordion-item">
//                   <h2 class="accordion-header">
//                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
//                       Accordion Item #2
//                     </button>
//                   </h2>
//                   <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
//                     <div class="accordion-body">
//                       <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                     </div>
//                   </div>
//                 </div>
//                 <div class="accordion-item">
//                   <h2 class="accordion-header">
//                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
//                       Accordion Item #3
//                     </button>
//                   </h2>
//                   <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
//                     <div class="accordion-body">
//                       <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                     </div>
//                   </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default FAQPage;






import React, {useEffect} from "react";
import "./FAQPage.css"
const FAQPage=({setNavbar})=>{
  useEffect(()=>{
    setNavbar();
  },[])
    return(
        <div className="faq-page-container">
            <h1>Frequently Asked Questions</h1>
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    About Us
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      We are a group of four enthusiastic students from the Electrical Engineering department at IIT Indore, passionate about serving our fellow night owls with delicious food and snacks during those late-night study sessions and cravings. As students ourselves, we understand the importance of having access to good food at any hour, and that's exactly what we aim to provide.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Our Mission
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body">
                    At the Night Canteen, our mission is to offer a wide variety of scrumptious food items from our menu, tailored to suit the tastes and preferences of the diverse IIT Indore community. We are committed to delivering top-quality, hygienic, and wholesome meals to keep you energized and focused, whether you're burning the midnight oil before an exam or simply hanging out with friends after hours.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    What We Offer
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      Our menu is carefully curated to cater to all your late-night cravings. From delicious and hearty meals to quick bites and beverages, we've got it all. Some of our specialties include:
                      <ul>
                        <li>Midnight Munchies: Craving a filling snack to satisfy those late-night hunger pangs? Try our range of sandwiches, wraps, and rolls, made with fresh ingredients and packed with flavor.</li>
                        <li>Comfort Food Classics: Sometimes, all you need is a taste of home. Indulge in our comforting classics like Maggi, Chai, and parathas that are sure to bring back memories.</li>
                        <li>Satisfying Beverages: Whether you need a dose of caffeine to stay awake or a refreshing cool drink to unwind, our assortment of beverages will cater to your desires.</li>
                        <li>Healthy Bites: For health-conscious foodies, we have a selection of nutritious options that won't compromise on taste. From salads to fruit bowls, we've got you covered.                    </li>
                      </ul>
                    </div>

                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    How to Order
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                    <div class="accordion-body">
                    Ordering from our Night Canteen is quick and hassle-free! Simply visit our website or use our user-friendly mobile app to browse through the menu and place your order. Choose your preferred dishes and customize them as per your taste. We also offer the option of pre-scheduling your orders, ensuring your food arrives right when you need it.
                    </div>

                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                    Our Commitment
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                    <div class="accordion-body">
                    As fellow students of IIT Indore, we value the trust and support of our campus community. That's why we maintain the highest standards of hygiene and quality in the preparation of our food. Our dedicated team ensures that every dish is cooked to perfection, using only the finest and freshest ingredients.
                    </div>

                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                    Contact Us
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                    <div class="accordion-body">
                    Have a question or want to give us feedback? We'd love to hear from you! You can reach out to us through our website or app, or simply drop by our canteen for a friendly chat. We are always open to suggestions and strive to improve our services based on your valuable inputs.
                    </div>

                  </div>
                </div>
            </div>
        </div>
    )
}
export default FAQPage;