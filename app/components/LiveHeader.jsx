import { DropdownMenu } from './DropdownMenu'

export const LiveHeader = () => {
    return (
        <div className="flex mb-2 justify-center border-b-[0.3px] border-[hsl(240,1%,59%)] w-[90vw]">
            <div className="flex flex-col items-center justify-center text-[hsl(0,0%,100%)]">
                <div className="w-full flex text-xl gap-10 text-[hsl(240,1%,59%)] mb-5 items-center justify-center">
                    <div className="flex flex-col items-center justify-center border-r-1 pr-8">
                        <div>WPM: </div>
                        <div className="text-2xl font-bold">{/*LIVE WPM HERE */}90</div>
                    </div>
                    <div className="flex flex-col items-center justify-center -mx-2">
                        <div>Accuracy: </div>
                        <div className="text-2xl font-bold text-[hsl(354,63%,57%)]">{/*LIVE Accuracy HERE */}90%</div>
                    </div>
                    <div className="flex flex-col items-center justify-center border-l-1 pl-8">
                        <div>Time: </div>
                        <div className="text-2xl font-bold text-[hsl(49,85%,70%)]">{/*LIVE Time HERE */}0:90</div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 mb-3">
                    <DropdownMenu 
                        defaultValue="easy" 
                        options={[
                        { value: 'easy', label: 'Easy' },
                        { value: 'medium', label: 'Medium' },
                        { value: 'hard', label: 'Hard' }
                        ]} 
                    />
                    <DropdownMenu 
                        defaultValue="timed" 
                        options={[
                        { value: 'timed', label: 'Timed (60s)' },
                        { value: 'passage', label: 'Passage' }
                        ]} 
                    />
                </div>
            </div>
        </div>
    
    )
}