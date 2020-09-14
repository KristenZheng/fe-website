<template>
  <div class="contact">
    <div class="banner">
      <div class="content">
        <h2>Order a hub for your local!</h2>
        <p>
          Let us make it easy for you and your customers,
          <br />We provide rentable powerbank with hubs without any deposit,
          <br />Offer a service without any investment in electrical outlets or cables!
        </p>
        <button @click="changeValue()">Order now！</button>
      </div>
    </div>
    <div class="main">
      <h3 class="title">The benefits of Electra</h3>
      <div class="benefits">
        <dl>
          <dt>
            <img src="../../../public/images/two.png" />
          </dt>
          <dd class="dl-title">Increase revenue</dd>
          <dd>
            Increase revenue -
            <br />the longer your customer's phone is powered on the more money you earn
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="../../../public/images/three.png" />
          </dt>
          <dd class="dl-title">Friendly experience</dd>
          <dd>
            Friendly customer experience-
            <br />Simple design, High quality battery
            Friendly user App
          </dd>
        </dl>
        <dl class="benefits-dl">
          <dt>
            <img src="../../../public/images/four.png" />
          </dt>
          <dd class="dl-title">share the profits</dd>
          <dd>
            0 cost-Absolutely free!
            <br />We will not ask for your deposit or service fee, We will even share the profits with you and your store.
          </dd>
        </dl>
      </div>

      <div class="hubs">
        <div class="hubs-top">
          <img src="../../../public/images/five.png" />
          <div class="hubs-content">
            <h2>HUBS and powerbank</h2>
            <p>
              Simple Design-the hubs always has enough powerbanks,
              <br />3-in-one cables for all types of phones, lighting/Micro USB/Type-c.
              <br />flexible size included 5 powerbank.
            </p>
            <p>Easy to use-</p>
          </div>
        </div>

        <div class="hubs-footer" style="display:flex">
          <div class="hubs-content">
            <h2>APP</h2>
            <p>
              Great experience of Electra App, easy to rent and return,
              <br />find your nearest Electra hubs, scan QR code to rent,
              <br />Return to any available hubs
            </p>
            <p>
              Payment methods-We have a global payment solution,
              <br />accepting all major Credit card provider and PayPal, etc
            </p>
          </div>
          <img src="../../../public/images/six.png" />
        </div>
      </div>

      <div class="partners">
        <h3>Our partners</h3>
        <p>
          <img src="../../../public/images/seven.png" />
        </p>
        <p>
          <img src="../../../public/images/eight.png" />
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-title">
        <p>Our partners to you</p>
      </div>

      <div style="display:flex">
        <div class="footer-left">
          <h4>Our responsibllity</h4>
          <p>
            Vi sköter allt arbete med stationerna så att din personal kan
            <br />fokusera på det som är viktigt
          </p>

          <ul>
            <li>
              <img src="../../../public/images/nine.png" />Gratis leverans & installation från Wim
            </li>
            <li>
              <img src="../../../public/images/nine.png" />Alla kundfrågor sköter vi genom appen, 24/7
            </li>
            <li>
              <img src="../../../public/images/nine.png" />Vi hjälper dig att ta fram material till skärmen
            </li>
            <li>
              <img src="../../../public/images/nine.png" />Gratis exponering i appen mot tusentals användare
            </li>
            <li>
              <img src="../../../public/images/nine.png" />Vi löser allt underhåll och fyller på powerbanks
            </li>
          </ul>
        </div>
        <div class="footer-right" id="footer">
          <h4>Your responsibllity</h4>
          <p>
            Som partner med Wim är det inte mycket du behöver tänka på,
            <br />vi sköter så gott som allt. Det enda vi behöver från er är:
          </p>
          <div>
            <ul>
              <li>
                <img src="../../../public/images/nine.png" />Låt stationen sitta inkopplad i ett el-uttag
              </li>
              <li>
                <img src="../../../public/images/nine.png" />Placera stationen synligt & lättillgängligt för dina gäster
              </li>
              <li>
                <img src="../../../public/images/nine.png" />That's it, vi sköter resten
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      // isActive: true,
    };
  },
  methods: {
    changeValue() {
      let obj = document.getElementById("footer");
      let scrollTop = obj.offsetTop;
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
      console.log(top);
    },
  },
};
</script>

<style  scoped lang='scss'>
.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: hidden;
  .banner {
    width: 100%;
    // height: 3rem;
    background: url("../../../public/images/one.png");
    background-repeat: no-repeat;
    background-size: 100%;
    .content {
      width: 6rem;
      color: #ffffff;
      margin: 0 auto;
      margin-top: 0.8rem;
      h2 {
        font-size: 0.3rem;
      }
      p {
        width: 71%;
      }
      button {
        // width: 22%;
        color: #3c3c3c;
        // font-size: 0.12rem;
        outline: none;
        border-radius: 0.1rem;
        border: 0;
        background: #ffffff;
        margin-top: 1%;
        text-align: center;
      }
    }
  }
  .main {
    width: 100%;
    flex: 1;
    .title {
      text-align: center;
      margin-top: 0.3rem;
      font-size: 0.21rem;
      font-family: HiraKakuStdN-W8, HiraKakuStdN;
      font-weight: normal;
      color: #56565f;
      line-height: 0.36rem;
    }
    .benefits {
      width: 70%;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      dl {
        width: 30%;
        text-align: center;
        margin-top: 0.3rem;
        img {
          width: 1.32rem;
          height: 1.32rem;
        }
        dd {
          font-size: 0.14rem;
          font-family: Helvetica;
          color: #999999;
          line-height: 0.2rem;
          margin-top: 0.2rem;
        }
      }

      .dl-title {
        font-size: 0.21rem;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #3c3c3c;
        line-height: 0.29rem;
      }
    }

    .hubs {
      width: 100%;
      margin-top: 5%;

      .hubs-top,
      .hubs-footer {
        width: 100%;
        display: flex;
        div {
          width: 50%;
        }
      }

      .hubs-top img {
        width: 50%;
      }
      .hubs-footer img {
        width: 50%;
      }

    
      .hubs-content {
        background: #ffffff;
        h2 {
          margin-top: 10%;
          margin-left: 8%;
        }
        p {
          margin-left: 8%;
          color: rgba(0, 0, 0, 0.5);
          font-size: 0.11rem;
        }
      }
    }

    .partners {
      width: 100%;
      margin-top: 5%;
      h3 {
        font-size: 0.23rem;
        text-align: center;
        color: #56565f;
      }
      img {
        width: 100%;
      }
    }
  }
  .footer {
    width: 100%;
    background: #8e8e8e;

    .footer-title {
      text-align: center;
      color: #ffffff;
      font-size: 0.21rem;
      margin-top: 5%;
    }
    .footer-left,
    .footer-right {
      margin-left: 5%;
      margin-top: 5%;
      h4 {
        font-size: 0.18rem;
        color: #ffffff;
      }
      p {
        color: #ffffff;
        font-size: 0.14rem;
      }
      ul {
        width: 100%;
        margin-left: 0;
        font-size: 0.14rem;
        color: #ffffff;
        list-style: none;

        li {
          line-height: 0.4rem;
          // list-style-image: url("../../../public/images/nine.png")  ;
          img {
            width: 0.13rem;
          }
        }
      }
    }
    .footer-right {
      margin-left: 8%;
    }
  }
}
</style>