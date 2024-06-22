import "./styles.css";
import SynonFetchProvider from './SynonContext'
import SearchInput from './SearchInput'
import SynonList from "./SynonList";

const App = () => {
    return (
        <SynonFetchProvider>
            <div className="App">
                <h1>Fetch all synonyms for a given word</h1>
                <SearchInput />
                <SynonList />
            </div>
        </SynonFetchProvider>
    );
};

export default App;
