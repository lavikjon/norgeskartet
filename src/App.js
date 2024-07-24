import React, {useState, useEffect} from 'react';

const kommuneList = [
    'Oslo',
    'Eigersund',
    'Stavanger',
    'Haugesund',
    'Sandnes',
    'Sokndal',
    'Lund',
    'Bjerkreim',
    'Hå',
    'Klepp',
    'Time',
    'Gjesdal',
    'Sola',
    'Randaberg',
    'Strand',
    'Hjelmeland',
    'Suldal',
    'Sauda',
    'Kvitsøy',
    'Bokn',
    'Tysvær',
    'Karmøy',
    'Utsira',
    'Vindafjord',
    'Kristiansund',
    'Molde',
    'Ålesund',
    'Vanylven',
    'Sande',
    'Herøy',
    'Ulstein',
    'Hareid',
    'Ørsta',
    'Stranda',
    'Sykkylven',
    'Sula',
    'Giske',
    'Vestnes',
    'Rauma',
    'Aukra',
    'Averøy',
    'Gjemnes',
    'Tingvoll',
    'Sunndal',
    'Surnadal',
    'Smøla',
    'Aure',
    'Volda',
    'Fjord',
    'Hustadvika',
    'Haram',
    'Bodø',
    'Narvik',
    'Bindal',
    'Sømna',
    'Brønnøy',
    'Vega',
    'Vevelstad',
    'Herøy',
    'Alstahaug',
    'Leirfjord',
    'Vefsn',
    'Grane',
    'Hattfjelldal',
    'Dønna',
    'Nesna',
    'Hemnes',
    'Rana',
    'Lurøy',
    'Træna',
    'Rødøy',
    'Meløy',
    'Gildeskål',
    'Beiarn',
    'Saltdal',
    'Fauske',
    'Sørfold',
    'Steigen',
    'Lødingen',
    'Evenes',
    'Røst',
    'Værøy',
    'Flakstad',
    'Vestvågøy',
    'Vågan',
    'Hadsel',
    'Bø',
    'Øksnes',
    'Sortland',
    'Andøy',
    'Moskenes',
    'Hamarøy',
    'Halden',
    'Moss',
    'Sarpsborg',
    'Fredrikstad',
    'Hvaler',
    'Råde',
    'Våler',
    'Skiptvet',
    'Indre-Østfold',
    'Rakkestad',
    'Marker',
    'Aremark',
    'Bærum',
    'Asker',
    'Lillestrøm',
    'Nordre-Follo',
    'Ullensaker',
    'Nesodden',
    'Frogn',
    'Vestby',
    'Ås',
    'Enebakk',
    'Lørenskog',
    'Rælingen',
    'Aurskog-Høland',
    'Nes',
    'Gjerdrum',
    'Nittedal',
    'Lunner',
    'Jevnaker',
    'Nannestad',
    'Eidsvoll',
    'Hurdal',
    'Drammen',
    'Kongsberg',
    'Ringerike',
    'Hole',
    'Lier',
    'Øvre-Eiker',
    'Modum',
    'Krødsherad',
    'Flå',
    'Nesbyen',
    'Gol',
    'Hemsedal',
    'Ål',
    'Hol',
    'Sigdal',
    'Flesberg',
    'Rollag',
    'Nore-og-Uvdal',
    'Kongsvinger',
    'Hamar',
    'Lillehammer',
    'Gjøvik',
    'Ringsaker',
    'Løten',
    'Stange',
    'Nord-Odal',
    'Sør-Odal',
    'Eidskog',
    'Grue',
    'Åsnes',
    'Våler',
    'Elverum',
    'Trysil',
    'Åmot',
    'Stor-Elvdal',
    'Rendalen',
    'Engerdal',
    'Tolga',
    'Tynset',
    'Alvdal',
    'Folldal',
    'Os',
    'Dovre',
    'Lesja',
    'Skjåk',
    'Lom',
    'Vågå',
    'Nord-Fron',
    'Sel',
    'Sør-Fron',
    'Ringebu',
    'Øyer',
    'Gausdal',
    'Østre-Toten',
    'Vestre-Toten',
    'Gran',
    'Søndre-Land',
    'Nordre-Land',
    'Sør-Aurdal',
    'Etnedal',
    'Nord-Aurdal',
    'Vestre-Slidre',
    'Øystre-Slidre',
    'Vang',
    'Horten',
    'Holmestrand',
    'Tønsberg',
    'Sandefjord',
    'Larvik',
    'Færder',
    'Porsgrunn',
    'Skien',
    'Notodden',
    'Siljan',
    'Bamble',
    'Kragerø',
    'Drangedal',
    'Nome',
    'Midt-Telemark',
    'Seljord',
    'Hjartdal',
    'Tinn',
    'Kviteseid',
    'Nissedal',
    'Fyresdal',
    'Tokke',
    'Vinje',
    'Risør',
    'Grimstad',
    'Arendal',
    'Kristiansand',
    'Lindesnes',
    'Farsund',
    'Flekkefjord',
    'Gjerstad',
    'Vegårshei',
    'Tvedestrand',
    'Froland',
    'Lillesand',
    'Birkenes',
    'Åmli',
    'Iveland',
    'Evje-og-Hornnes',
    'Bygland',
    'Valle',
    'Bykle',
    'Vennesla',
    'Åseral',
    'Lyngdal',
    'Hægebostad',
    'Kvinesdal',
    'Sirdal',
    'Bergen',
    'Kinn',
    'Etne',
    'Sveio',
    'Bømlo',
    'Stord',
    'Fitjar',
    'Tysnes',
    'Kvinnherad',
    'Ullensvang',
    'Eidfjord',
    'Ulvik',
    'Voss',
    'Kvam',
    'Samnanger',
    'Bjørnafjorden',
    'Austevoll',
    'Øygarden',
    'Askøy',
    'Vaksdal',
    'Modalen',
    'Osterøy',
    'Alver',
    'Austrheim',
    'Fedje',
    'Masfjorden',
    'Gulen',
    'Solund',
    'Hyllestad',
    'Høyanger',
    'Vik',
    'Sogndal',
    'Aurland',
    'Lærdal',
    'Årdal',
    'Luster',
    'Askvoll',
    'Fjaler',
    'Sunnfjord',
    'Bremanger',
    'Stad',
    'Gloppen',
    'Stryn',
    'Trondheim',
    'Namsos',
    'Steinkjer',
    'Frøya',
    'Osen',
    'Oppdal',
    'Rennebu',
    'Røros',
    'Holtålen',
    'Midtre-Gauldal',
    'Melhus',
    'Skaun',
    'Malvik',
    'Selbu',
    'Tydal',
    'Meråker',
    'Stjørdal',
    'Frosta',
    'Levanger',
    'Verdal',
    'Snåsa',
    'Lierne',
    'Røyrvik',
    'Namsskogan',
    'Grong',
    'Høylandet',
    'Overhalla',
    'Flatanger',
    'Leka',
    'Inderøy',
    'Indre-Fosen',
    'Heim',
    'Hitra',
    'Ørland',
    'Åfjord',
    'Orkland',
    'Nærøysund',
    'Rindal',
    'Tromsø',
    'Harstad',
    'Kvæfjord',
    'Tjeldsund',
    'Ibestad',
    'Gratangen',
    'Lavangen',
    'Bardu',
    'Salangen',
    'Målselv',
    'Sørreisa',
    'Dyrøy',
    'Senja',
    'Balsfjord',
    'Karlsøy',
    'Lyngen',
    'Storfjord',
    'Kåfjord',
    'Skjervøy',
    'Nordreisa',
    'Kvænangen',
    'Alta',
    'Hammerfest',
    'Sør-Varanger',
    'Vadsø',
    'Karasjok',
    'Guovdageaidnu',
    'Loppa',
    'Hasvik',
    'Måsøy',
    'Nordkapp',
    'Porsanger',
    'Lebesby',
    'Gamvik',
    'Tana',
    'Berlevåg',
    'Båtsfjord',
    'Vardø',
    'Nesseby',
    'Rennesøy',
];

const App = () => {
    const [words] = useState(kommuneList);
    const [searchTerm, setSearchTerm] = useState('');
    const [checkedWords, setCheckedWords] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedCheckedWords = localStorage.getItem('checkedWords');
        let newCheckedWords = savedCheckedWords ? JSON.parse(savedCheckedWords) : {};

        words.forEach(word => {
            if (!(word in newCheckedWords)) {
                newCheckedWords[word] = false;
            }
        });
        setCheckedWords(newCheckedWords);
        setIsLoading(false);
    }, [words]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleCheckboxChange = (word) => {
        const newCheckedWords = {...checkedWords, [word]: !checkedWords[word]};
        setCheckedWords(newCheckedWords);
        localStorage.setItem('checkedWords', JSON.stringify(newCheckedWords));
    };

    const handleSaveChecked = () => {
        localStorage.setItem('checkedWords', JSON.stringify(checkedWords));
        alert('Checked words saved successfully!');
    };

    const filteredWords = words.filter(word =>
        word.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const checkedCount = Object.values(checkedWords).filter(Boolean).length;

    return (
        <div style={{padding: '1rem', maxWidth: '400px', margin: '0 auto'}}>
            <div style={{marginBottom: '1rem'}}>
                <input
                    type="text"
                    placeholder="Search words..."
                    onChange={handleSearch}
                    value={searchTerm}
                    style={{marginBottom: '0.5rem', width: '100%', padding: '0.5rem'}}
                />
                <p style={{fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem'}}>
                    Checked: {checkedCount}/{words.length}
                </p>
                <button
                    onClick={handleSaveChecked}
                    style={{
                        width: '100%',
                        padding: '0.5rem',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Save Checked Words
                </button>
            </div>
            {isLoading ? (
                <div>Loading words...</div>
            ) : (
                <div style={{maxHeight: '60vh', overflowY: 'auto'}}>
                    <ul style={{listStyleType: 'none', padding: 0}}>
                        {filteredWords.map(word => (
                            <li key={word} style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                                <input
                                    type="checkbox"
                                    id={word}
                                    checked={checkedWords[word] || false}
                                    onChange={() => handleCheckboxChange(word)}
                                    style={{marginRight: '0.5rem'}}
                                />
                                <label
                                    htmlFor={word}
                                    style={{
                                        flexGrow: 1,
                                        textDecoration: checkedWords[word] ? 'line-through' : 'none'
                                    }}
                                >
                                    {word}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;