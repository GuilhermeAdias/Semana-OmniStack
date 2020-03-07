import React, { useState, useEffect } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'



// Componente: Bloco isolado de HTML , CSS e JS, no qual não interfere no restante da aplicação
// Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)
// Propriedade: Informações que um componente PAI passa para o componente FILHO 



function App() {
    
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

  useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        )
    }, []);


    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do GitHub</label>
                        <input name="github_username" id="github_username" required />
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required />
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input 
                            type="number" 
                            name="latidute" 
                            id="latitude" 
                            required  
                            value={latitude}
                            onChange={e => setLatitude(e.target.value)} 
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input 
                            type="number" 
                            name="longitude" 
                            id="longitude" 
                            required  
                            value={longitude} 
                            onChange={e => setLongitude(e.target.value)} 
                            />
                        </div>
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </aside>

            
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars1.githubusercontent.com/u/55250762?s=460&v=4" alt="Guilherme Abranches"/>
                            <div className="user-info">
                                <strong>Guilherme Abranches</strong>
                                <span>Angular, JavaScript, React</span>
                            </div>
                        </header>
                        <p>Estudante em Tecnologia da Informação e Comunicação.</p>
                        <a href="https://github.com/GuilhermeAdias">Acessar perfil no GitHub</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars1.githubusercontent.com/u/55250762?s=460&v=4" alt="Guilherme Abranches"/>
                            <div className="user-info">
                                <strong>Guilherme Abranches</strong>
                                <span>Angular, JavaScript, React</span>
                            </div>
                        </header>
                        <p>Estudante em Tecnologia da Informação e Comunicação.</p>
                        <a href="https://github.com/GuilhermeAdias">Acessar perfil no GitHub</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars1.githubusercontent.com/u/55250762?s=460&v=4" alt="Guilherme Abranches"/>
                            <div className="user-info">
                                <strong>Guilherme Abranches</strong>
                                <span>Angular, JavaScript, React</span>
                            </div>
                        </header>
                        <p>Estudante em Tecnologia da Informação e Comunicação.</p>
                        <a href="https://github.com/GuilhermeAdias">Acessar perfil no GitHub</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars1.githubusercontent.com/u/55250762?s=460&v=4" alt="Guilherme Abranches"/>
                            <div className="user-info">
                                <strong>Guilherme Abranches</strong>
                                <span>Angular, JavaScript, React</span>
                            </div>
                        </header>
                        <p>Estudante em Tecnologia da Informação e Comunicação.</p>
                        <a href="https://github.com/GuilhermeAdias">Acessar perfil no GitHub</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default App;