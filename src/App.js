import './App.css';

function App() {
  return (

    <div className="wrapper">
    <div className="page">
        <div className="header">
            <div className="heading">
                <h3 className="pay">PAYMENT RECEIPT</h3>
                <h1>Apple Music Membership</h1>
            </div>
            <div className="music-logo">
                <img src="https://raw.githubusercontent.com/Sayed-Anawer/psd-to-html/main/task4/assets/images/music-logo.png" alt=""/>
            </div>
        </div>
   
        <div className="simple-desc">
            <h4>Hey,</h4>
            <h4>Congratulations! You have just upgraded your apple music membership. <br/> Below are the details of your purchase.</h4>
       
        </div>
        <hr/>
        <div className="purchase-items">
            <div className="item">
                <i className="fas fa-check-square fa-lg"></i>
                <span className="Inlist">ORDER FROM</span>
                <h3 className="gaph">iTunes</h3>
            </div>
            <div className="item">
                <i className="fas fa-rupee-sign"></i>
                <span className="Inlist">TOTAL </span>
                <h3 className="gaph1">₹ 120</h3>

            </div>
            <div className="item">
                <i className="fas fa-list-alt fa-lg"></i>
                <div className="me"><span className="Inlist">
                        ITEMS
                    </span>
                    <h3 className="gaph3">Apple Music</h3>
                </div>


            </div>
        </div>
        <hr/>
    
        <div className="invoice-section">
            <div className="invoice">
                <h3><span className="In">Invoice id </span>: AM983022C</h3>
            </div>
            <div className="company">
                Apple.com/music
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
