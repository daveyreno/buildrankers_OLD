interface CountryInfoProps {
    countryInfo: {
        capital: string;
        continent: string;
        subcontinent: string;
        currency: string;
        currency_name: string;
        currency_symbol: string;
        iso: string;
        phonecode: string;
    };
}


export default function CountryInfo({ countryInfo }: CountryInfoProps) {
    return (
        <div className="text-sm border rounded-lg">

            <div className="flex items-center justify-between p-3 border-b">
                <p className=" text-slate-500">Capital</p>
                <p>{countryInfo.capital}</p>
            </div>

            <div className="flex items-center justify-between p-3 border-b">
                <p className="text-slate-500">Continent:</p>
                <p>{countryInfo.continent}</p>
            </div>

            <div className="flex items-center justify-between p-3 border-b">
                <p className=" text-slate-500">Currency Code:</p>
                <p>{countryInfo.currency}</p>
            </div>

            <div className="flex items-center justify-between p-3 border-b">
                <p className=" text-slate-500">Phone Code:</p>
                <p>{countryInfo.phonecode}</p>
            </div>

            <div className="flex items-center justify-between p-3 border-b">
                <p className=" text-slate-500">Currency Name:</p>
                <p>{countryInfo.currency_name}</p>
            </div>

            <div className="flex items-center justify-between p-3">
                <p className=" text-slate-500">Currency Symbol:</p>
                <p>{countryInfo.currency_symbol}</p>
            </div>

        </div>
    );
}