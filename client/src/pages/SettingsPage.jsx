import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/Accordion';

import PAndSwitch from '@/components/modules/PAndSwitch';
import { useEffect, useState } from 'react';

function SettingsPage() {
    useEffect(() => {
        console.log('준비물 알람 상태', supplyAlarmCheck);
        console.log('출발 알람 상태', startAlarmCheck);
        [supplyAlarmCheck, startAlarmCheck];
    });

    const [supplyAlarmCheck, setSupplyAlarmCheck] = useState(false);
    const [startAlarmCheck, setStartAlarmCheck] = useState(false);

    const handleSupplyAlarmCheck = (data) => {
        setSupplyAlarmCheck(data);
    };
    const handleStartAlarmCheck = (data) => {
        setStartAlarmCheck(data);
    };
    return (
        <div className="mt-4 w-72">
            <Accordion type="single" collapsible className="w-full ">
                <AccordionItem value="item-1">
                    <AccordionTrigger>회원 정보 설정</AccordionTrigger>
                    <AccordionContent>아직 개발 중입니다...</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>알림 설정</AccordionTrigger>
                    <AccordionContent>
                        <PAndSwitch
                            header="준비물 알림"
                            content="(현재 여정에 항공편 정보를 입력했다면) 출발 시각 24시간 전 준비물 리스트를 챙겼는지 알림을 보내줍니다."
                            isCheck={supplyAlarmCheck}
                            checking={handleSupplyAlarmCheck}
                        />
                        <PAndSwitch
                            header="출발 알림"
                            content="(현재 여정에 항공편 정보를 입력했다면) 출발 시각 1시간 전 알림을 보내줍니다."
                            isCheck={startAlarmCheck}
                            checking={handleStartAlarmCheck}
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default SettingsPage;
