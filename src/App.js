function App() {
  return (
    <div className="App container">
      <header id="header" class="header">
            <h1 class="main-title">Magic the Gathering rule book </h1>
            Data was loaded from www.wizard.com . Click here to load data from different URL
      </header>

      <nav class="navbar" id="navbar">
            <header>Table of Contents</header>
            <ol class="desktop-nav">
                <li><a class="nav-link" href="#svg">SVG</a></li>
                <ol>
                    <li><a href="#svg-shapes">SVG Shapes</a></li>
                </ol>
                
            </ol>
        </nav>

        <main class="main" id="main-doc">
            <section id="svg" class="main-section">
                <header>SVG</header>
                <h2 id="svg-shapes">SVG Shapes</h2>
                    Returns the maximum value in the given iterable using natural order.
                </section>
        </main>
        
    </div>
  );
}

export default App;
