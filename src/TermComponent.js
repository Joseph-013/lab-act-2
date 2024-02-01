const columns = [
    {colName: "Subject"}, 
    {colName: "Description"}, 
    {colName: "Lec"}, 
    {colName: "Lab"}, 
    {colName: "Pre-Requisite"},
];

function TermComponent(props) {
    return (
        <div className="mb-4">
            <span className="text-orange-700 font-bold">{props.term.term}</span>
            <div className="px-4">
                <table className="w-full">
                    <thead>
                        <tr>
                            {columns.map((col, colIndex) => (
                                <th className={`p-2 m-5 font-normal text-sm bg-amber-500 border-white border-2 
                                ${(colIndex === 0) ? 'w-24' : ''}
                                ${(colIndex === 1) ? 'w-82' : ''}
                                ${(colIndex === 2 || colIndex === 3) ? 'w-11' : ''}
                                // ${(colIndex === 4) ? 'w-96' : ''}
                                `}>{col.colName}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {props.term.courses.map((course, courseIndex) => (
                            <tr key={courseIndex}>
                                {columns.map((col, colIndex) => (
                                    <td className={`text-orange-700 font-bold p-2 text-sm bg-orange-200 border-white border-2 
                                    ${(colIndex === 2 || colIndex === 3) ? 'text-center' : ''} 
                                    ${(colIndex === 2 || colIndex === 3 || colIndex === 4) ? '!text-black bg-orange-100' : ''}
                                    
                                    `} key={colIndex}>{course[col.colName.toLowerCase()]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TermComponent;