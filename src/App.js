
import './App.css';
import './style/page.scss';
import './style/navigation.scss';

function App() {

  const changePage = (page) => { 

    
    document.querySelector('.sheet').classList.remove('active');
    /* document.querySelector('.level-one').classList.remove('active'); */
    if(document.querySelector('.level-one') != null){
      document.querySelector('.level-one').classList.remove('level-one')
    }
    
    document.querySelector('.page.active').classList.add('hide');
    document.querySelector('.page.active').classList.remove('active');

    
    document.querySelector(`.page.${page}`).classList.add('active');
    document.querySelector(`.page.${page}`).classList.remove('hide');
    document.querySelector('.sheet-cover-black').classList.remove('active');
    

  }
  //open spesipic sheet
  const openSheet = (sheet) => {
    document.querySelector('.sheet-cover-black').classList.add('active');

    document.querySelector('.page.active').classList.add('level-one');

    document.querySelector(`.sheet.${sheet}`).classList.add('active');
    document.querySelector(`.sheet.${sheet}`).classList.remove('hide');
  }
  //close spesipic sheet
  const closeSheet = (sheet) => {
    document.querySelector('.sheet-cover-black').classList.remove('active');
    document.querySelector(`.sheet.${sheet}`).classList.add('hide');
    document.querySelector(`.sheet.${sheet}`).classList.remove('active');
    document.querySelector('.page.active').classList.remove('level-one');
  }

  return (
    <div className="App">

      <div className="page home  active ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button">
              </div>
              <div className="header-title">
                <h3>Home</h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
            </div>
          </div>

        </div>
      </div>
      <div className="sheet addProduct hide">
          <div className="sheet-inner">

          <div className="sheet-header"
            onTouchMove={
              (e) => {
                if (e.touches[0].clientY < 100) {
                  closeSheet('addProduct')
                }
              }
            }
          >
            <div className="sheet-header-inner">
              <div className="header-button">
              </div>
              <div className="header-title">
                <h3>Add product</h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="sheet-content">
            <div className="sheet-content-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
            </div>
          </div>

              </div>
        </div>
      <div className="page orders hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    changePage('home')
                  }
                }
              >
                <div className="icon"></div>
                <div className="label">Home</div>
              </div>
              <div className="header-title">
                <h3>Orders</h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
            </div>
          </div>

        </div>
      </div>
      <div className="page products hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    changePage('home')
                  }
                }
              >
                <div className="icon"></div>
                <div className="label">Home</div>
              </div>
              <div className="header-title">
                <h3>Products</h3>
              </div>
              <div className="option"
                onClick={
                  () => {
                    openSheet('addProduct')
                  }
                }
              
              >
                <div className="label"> </div>
                <div className="icon"></div>
              </div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
            </div>
          </div>

        </div>
      </div>
      <div className="page store hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    changePage('home')
                  }
                }
              >
                <div className="icon"></div>
                <div className="label">Home</div>
              </div>
              <div className="header-title">
                <h3>Store</h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
            </div>
          </div>

        </div>
      </div>
      
      <div className="sheet-cover-black"
        onClick={
          () => {
            closeSheet('addProduct')
          }
        }
        //react on drag down
        onTouchMove={
          (e) => {
            if (e.touches[0].clientY < 100) {
              closeSheet('addProduct')
            }
          }
        }
      >

      </div>
      <div className="navigation">
        <div className="navigation-inner">

          <div className="navigation-button home"
            onClick={
              () => {
                changePage('home')
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Home</div>
          </div>
          <div className="navigation-button orders"
            onClick={
              () => {
                changePage('orders')
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Orders</div>
          </div>  
          <div className="navigation-button products"
            onClick={
              () => {
                changePage('products')
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Products</div>
          </div>
          <div className="navigation-button store"
            onClick={
              () => {
                changePage('store')
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Store</div>
          <div/>

        </div>
        </div>
      </div>
    </div>
  );
}

export default App;