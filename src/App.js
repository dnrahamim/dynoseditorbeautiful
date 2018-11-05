import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/nav.css'
import './css/aside.css'
import './css/header.css'
import './css/document.css'
import './css/body.css'
import './css/util.css'

class App extends Component {
  render() {
    return (
      <div>
  
  {/* HEADER */}
  <header>
    <div id="backbtn" className="btn">
      <img
        src="img/icons-8-left-4/icons-8-left-4.png"
        srcSet="img/icons-8-left-4/icons-8-left-4@2x.png 2x,
                img/icons-8-left-4/icons-8-left-4@3x.png 3x"
        id="backcarat"
      />
      <div id="backtext">Back</div>
    </div>
    <div className="btn">
      <img
        src="img/icons-8-undo/icons-8-undo.png"
        srcSet="img/icons-8-undo/icons-8-undo@2x.png 2x,
                img/icons-8-undo/icons-8-undo@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-redo/icons-8-redo.png"
        srcSet="img/icons-8-redo/icons-8-redo@2x.png 2x,
                img/icons-8-redo/icons-8-redo@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-clear-formatting/icons-8-clear-formatting.png"
        srcSet="img/icons-8-clear-formatting/icons-8-clear-formatting@2x.png 2x,
                img/icons-8-clear-formatting/icons-8-clear-formatting@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="vr" />
    <div className="btn">
      <img
        src="img/icons-8-bold/icons-8-bold.png"
        srcSet="img/icons-8-bold/icons-8-bold@2x.png 2x,
                img/icons-8-bold/icons-8-bold@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-italic/icons-8-italic.png"
        srcSet="img/icons-8-italic/icons-8-italic@2x.png 2x,
                img/icons-8-italic/icons-8-italic@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-underline/icons-8-underline.png"
        srcSet="img/icons-8-underline/icons-8-underline@2x.png 2x,
                img/icons-8-underline/icons-8-underline@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-strikethrough/icons-8-strikethrough.png"
        srcSet="img/icons-8-strikethrough/icons-8-strikethrough@2x.png 2x,
                img/icons-8-strikethrough/icons-8-strikethrough@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-text-color/icons-8-text-color.png"
        srcSet="img/icons-8-text-color/icons-8-text-color@2x.png 2x,
                img/icons-8-text-color/icons-8-text-color@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-fill-color/icons-8-fill-color.png"
        srcSet="img/icons-8-fill-color/icons-8-fill-color@2x.png 2x,
                img/icons-8-fill-color/icons-8-fill-color@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="vr" />
    <div className="btn">
      <img
        src="img/icons-8-align-left/icons-8-align-left.png"
        srcSet="img/icons-8-align-left/icons-8-align-left@2x.png 2x,
                img/icons-8-align-left/icons-8-align-left@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-align-center/icons-8-align-center.png"
        srcSet="img/icons-8-align-center/icons-8-align-center@2x.png 2x,
                img/icons-8-align-center/icons-8-align-center@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-align-right/icons-8-align-right.png"
        srcSet="img/icons-8-align-right/icons-8-align-right@2x.png 2x,
                img/icons-8-align-right/icons-8-align-right@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-align-justify/icons-8-align-justify.png"
        srcSet="img/icons-8-align-justify/icons-8-align-justify@2x.png 2x,
                img/icons-8-align-justify/icons-8-align-justify@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="vr" />
    <div className="btn">
      <img
        src="img/icons-8-list/icons-8-list.png"
        srcSet="img/icons-8-list/icons-8-list@2x.png 2x,
                img/icons-8-list/icons-8-list@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-numbered-list/icons-8-numbered-list.png"
        srcSet="img/icons-8-numbered-list/icons-8-numbered-list@2x.png 2x,
                img/icons-8-numbered-list/icons-8-numbered-list@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-increase-indent/icons-8-increase-indent.png"
        srcSet="img/icons-8-increase-indent/icons-8-increase-indent@2x.png 2x,
                img/icons-8-increase-indent/icons-8-increase-indent@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-decrease-indent/icons-8-decrease-indent.png"
        srcSet="img/icons-8-decrease-indent/icons-8-decrease-indent@2x.png 2x,
                img/icons-8-decrease-indent/icons-8-decrease-indent@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="vr" />
    <div className="btn">
      <img
        src="img/icons-8-link/icons-8-link.png"
        srcSet="img/icons-8-link/icons-8-link@2x.png 2x,
                img/icons-8-link/icons-8-link@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="btn">
      <img
        src="img/icons-8-source-code/icons-8-source-code.png"
        srcSet="img/icons-8-source-code/icons-8-source-code@2x.png 2x,
                img/icons-8-source-code/icons-8-source-code@3x.png 3x"
        className="icon"
      />
    </div>
    <div className="vr" />
    <div id="shareprevsave">
      <img
        src="img/share-icon/share-icon.png"
        srcSet="img/share-icon/share-icon@2x.png 2x,
                img/share-icon/share-icon@3x.png 3x"
        id="sharebtn"
      />
      <div id="previewbtn">Preview</div>
      <div id="savebtn">Save</div>
    </div>
  </header>
  <div id="main">
    {/* NAV */}
    <nav>
      <div id="inputs" className="addfieldbtn btn">
        <img
          src="/img/icons-8-rename/icons-8-rename.png"
          srcSet="/img/icons-8-rename/icons-8-rename@2x.png 2x,
                /img/icons-8-rename/icons-8-rename@3x.png 3x"
          className="fieldbtnicon"
        />
        <div className="fieldbtntxt">Inputs</div>
      </div>
      <div id="table" className="addfieldbtn btn">
        <img
          src="img/icons-8-table-1/icons-8-table-1.png"
          srcSet="img/icons-8-table-1/icons-8-table-1@2x.png 2x,
                  img/icons-8-table-1/icons-8-table-1@3x.png 3x"
          className="fieldbtnicon"
        />
        <div className="fieldbtntxt">Inputs</div>
      </div>
      <div id="charts" className="addfieldbtn btn">
        <img
          src="img/icons-8-rebalance-portfolio/icons-8-rebalance-portfolio.png"
          srcSet="img/icons-8-rebalance-portfolio/icons-8-rebalance-portfolio@2x.png 2x,
                  img/icons-8-rebalance-portfolio/icons-8-rebalance-portfolio@3x.png 3x"
          className="fieldbtnicon"
        />
        <div className="fieldbtntxt">Charts</div>
      </div>
      <div id="shapes" className="addfieldbtn btn">
        <img
          src="img/icons-8-metamorphose/icons-8-metamorphose.png"
          srcSet="img/icons-8-metamorphose/icons-8-metamorphose@2x.png 2x,
                  img/icons-8-metamorphose/icons-8-metamorphose@3x.png 3x"
          className="fieldbtnicon"
        />
        <div className="fieldbtntxt">Shapes</div>
      </div>
      <div id="media" className="addfieldbtn btn">
        <img
          src="img/icons-8-picture/icons-8-picture.png"
          srcSet="img/icons-8-picture/icons-8-picture@2x.png 2x,
                  img/icons-8-picture/icons-8-picture@3x.png 3x"
          className="fieldbtnicon"
        />
        <div className="fieldbtntxt">Media</div>
      </div>
      <div id="equations" className="addfieldbtn btn">
        <img
          src="img/sigma/sigma.png"
          srcSet="img/sigma/sigma@2x.png 2x,
                  img/sigma/sigma@3x.png 3x"
          className="fieldbtnicon"
        />
        <div className="fieldbtntxt">Equations</div>
      </div>
      <div id="functions" className="addfieldbtn btn">
        <img
          src="img/fx/fx.png"
          srcSet="img/fx/fx@2x.png 2x,
                  img/fx/fx@3x.png 3x"
          className="fieldbtnicon"
        />
        <div className="fieldbtntxt">Functions</div>
      </div>
    </nav>
    {/* DOCUMENT */}
    <div id="document">
      <div id="leftmargin" />
      <div id="center">
        <div id="titlebar">
          <div id="titlelabel">Dyno Title</div>
          <h2 id="dynotitle" contentEditable="true">
            Untitled Dyno
          </h2>
          <hr />
        </div>
        <article>
          Article Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. In vulputate orci eros, vel scelerisque tellus viverra
          vel. Aliquam elementum quis diam nec scelerisque. Etiam
          dignissim congue elit, ac faucibus lacus vulputate ut. Ut
          commodo porta nibh, in eleifend lacus malesuada a.
          Pellentesque lacinia erat maximus tortor mollis ullamcorper.
          Praesent sodales, nibh quis aliquam molestie, metus nunc
          congue leo, a dictum lacus lectus nec turpis. Praesent
          accumsan lacinia quam eu congue. Pellentesque et quam nec
          diam eleifend dictum. Donec suscipit dui sit amet aliquet
          dapibus. In hac habitasse platea dictumst. Aenean sed neque
          iaculis, suscipit neque eget, lobortis nunc. Nulla et libero
          id diam sodales rutrum. Integer sollicitudin at lorem et
          hendrerit. Nullam justo dolor, porta in elit eu, bibendum
          sollicitudin nisi. Curabitur finibus imperdiet mollis. Donec
          vehicula quam sit amet risus eleifend lacinia. Sed lectus
          nisl, faucibus in mattis at, fermentum ut sem. Nam varius,
          nisl in volutpat pulvinar, quam mi luctus justo, sed sodales
          sapien metus mattis libero. Nunc lacinia erat scelerisque,
          rutrum erat in, consequat enim. In sed dolor vitae neque
          tempus feugiat. Cras eu pulvinar risus. Phasellus euismod
          lectus ante, sed imperdiet mi finibus eu. Suspendisse non
          aliquet nibh, in venenatis mi. Integer sit amet mattis est.
          Fusce tempor erat vitae justo volutpat, at vulputate massa
          lobortis. Duis vulputate eros ut orci consequat, ac euismod
          ante imperdiet. Morbi sagittis elit ipsum, nec gravida ipsum
          sodales eget. Curabitur aliquam sollicitudin justo, vel
          sollicitudin libero cursus eget. Maecenas in eleifend arcu.
          Aenean vitae fringilla eros, vitae tristique nunc. Vivamus
          varius leo id tempus posuere. Nulla non ipsum pellentesque,
          mollis dui a, fringilla risus. Nunc elementum nulla ut erat
          faucibus, ac euismod leo fringilla. Donec iaculis magna at
          semper pretium. Nullam eget libero lacinia, porttitor turpis
          ac, condimentum justo. Sed libero metus, facilisis sit amet
          neque maximus, consectetur vestibulum ligula. Pellentesque
          quis erat et dolor condimentum tempus ac eget augue. Nullam
          a fringilla sem. Nam elementum facilisis neque, ac venenatis
          risus hendrerit quis. Cras sagittis lorem a justo maximus
          iaculis. In ultricies auctor purus, ac vulputate turpis
          pulvinar eleifend. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia Curae; Proin at
          eleifend dolor, id tincidunt arcu. Curabitur nec interdum
          nulla, ac mattis lorem. Nulla bibendum nibh ac arcu
          fringilla commodo. Quisque justo diam, tempus eget ipsum sit
          amet, aliquet lacinia purus. In gravida interdum augue. Duis
          sit amet cursus ante, sed ullamcorper ligula. In in elit ac
          sapien mollis dictum. Curabitur auctor velit est, in egestas
          sapien finibus sit amet. Nulla eu nunc vitae enim consequat
          aliquam. Etiam quis tincidunt enim.
        </article>
      </div>
      <div id="rightmargin" />
    </div>
    <aside>
      <input
        id="searchbox"
        type="text"
        placeholder="search anything"
      />
    </aside>
  </div>
</div>

    );
  }
}

export default App;
