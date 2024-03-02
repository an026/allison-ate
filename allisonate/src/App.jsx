import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <h1>Allison Ate</h1>
      <div className="card-container">
        <Card
          title="Nagomiya"
          content="I always get three rolls (spicy crunchy eel, crunchy shrimp, and crunchy yellowtail) and a side of spicy garlic edamame."
          image="https://cdn.vox-cdn.com/thumbor/WHeu2H1Eh_4kmySg4luRs2j-BUI=/0x0:1440x960/1200x0/filters:focal(0x0:1440x960):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22642311/191500153_308547184068088_2772446386341771353_n.jpg"
          link="https://www.nagomiyaatlanta.com/"
        />
        <Card
          title="Möge Tea"
          content="The best boba spot in the Georgia Tech/Midtown area I have tried so far. I love their taro boba tea made with real taro."
          image="https://scontent-iad3-1.cdninstagram.com/v/t39.30808-6/429779434_18255946093236832_3673581363719486002_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=H4Y8E-sQLjcAX_aDsAB&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfC1L9CY0VL0YnlBfQP9kQ9jBslcfDALUBgTGQOH3TAHfw&oe=65E880D3"
          link="https://www.mogeteeusa.com/store-locations-1/ga"
        />
        <Card
          title="Nakato Restaurant"
          content="I got the chicken with plain rice combo, and it came with yummy chicken broth and noodles. My chef was funny and highly skilled at his craft!"
          image="https://lh3.googleusercontent.com/p/AF1QipNUIRYkjXQdUwhtU3lT6K-f2MTuhdC8MaRJqTsx=s1360-w1360-h1020"
          link="https://www.nakatorestaurant.com/"
        />
        <Card
          title="Waffle House"
          content="Perfect for late night dinners. Inexpensive and you get a lot of food. I always get the All-Star breakfast with a plain waffle."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiIld2su5F-lX1d11QgdVxZ52e8FbngTODgg&usqp=CAU"
          link="https://locations.wafflehouse.com/atlanta-ga-1996"
        />
        <Card
          title="Buffalo Wild Wings GO"
          content="I usually order the 10-piece combo with the lemon pepper dry rub and honey barbeque sauce."
          image="https://stories.inspirebrands.com/wp-content/uploads/2020/05/Buffalo-Wild-Wings-Go.jpeg"
          link="https://www.buffalowildwings.com/menu/"
        />
        <Card
          title="Moe's"
          content="I get a burrito with gauc, black beans, rice, tofu, bacon, pico de gallo, lettuce, and mayo."
          image="https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2018/11/moesrevamp08_courtesy.jpg"
          link="https://www.moes.com/menu"
        />
        <Card
          title="Xi'an Gourmet House"
          content="Got the egg and tomato flat noodle soup. Great value and great food!"
          image="https://s3-media0.fl.yelpcdn.com/bphoto/VUUd-IKUw6pMDrzN3nvzyA/348s.jpg"
          link="https://xiangourmethouse.kwickmenu.com/"
        />
        <Card
          title="Ray's Pizza"
          content="Come to Ray's Pizza and try the multitude of delicious pizza options they offer. I usually get a plain pizza."
          image="https://atlantafortheyoung.files.wordpress.com/2014/09/4c5fe-dsc01172f.jpg"
          link="https://www.raysnewyorkpizza.com/"
        />
        <Card
          title="Tin Drum"
          content="Tin Drum Asian Kitchen Premium Bubble Tea. You choose the ingredients, that's what you get."
          image="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_5792,w_8688,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Tin_Drum_Asian_Kitchen_nzs0rl.jpg"
          link="https://tindrumasiankitchen.com/"
        />
        <Card
          title="Panda Express"
          content="Do not get the fried rice. Made me throw up the next morning."
          image="https://media-cdn.tripadvisor.com/media/photo-s/0e/9f/5f/c3/we-shared-2-entrees-1.jpg"
          link="https://www.pandaexpress.com/"
        />
      </div>
    </div>
  );
};

export default App;
