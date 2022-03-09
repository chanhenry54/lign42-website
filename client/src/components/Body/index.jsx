import React from 'react';
import './style.scss';
import 'antd/dist/antd.min.css';

import { Anchor } from 'antd';

const { Link } = Anchor;

const Body = () => {
    return (
        <div className="body">
            <Anchor>
                <Link href="#intro" title="Introduction" />
                <Link href="#history" title="History" />
            </Anchor>
            <div className="body-flex">
                <div className="body-container">
                    <div id="title">
                        <h1>the uwu wegistew (´･ω･`)</h1>
                        <h2>lign 42 winter 2022</h2>
                    </div>
                    <div id="intro">
                        <p>This is an introduction.</p>
                    </div>
                    <div id="history">
                        <p>When you accept an offer, the company and its people begin to rely on you, and they become invested in the positive outcome resulting from that relationship. Your future actions, whether positive or negative, rub off on those who stood beside you and this is with UCSD's reputation with Microsoft, the CSE Department's reputation with Microsoft, the CS Tutors' reputations with Microsoft, and as a result Rick's and my reputation with Microsoft does not shine as brightly due to your selfish actions. The cost of changing your mind is far from zero. Responding to a recruiter that no other student has ever had negative ramifications when choosing to rescind an acceptance is scarring, shocking, and audacious! Of course, just because you're unaware of the negative ramifications doesn't mean there aren't any. Drawing such a conclusion reveals a deep hole in your engineering education in basic logic. In your situation, your first negative outcome will be my inability to be a reference in any future endeavor. The prospect or possibility of a positive relationship with me is over. I can't speak for Rick but the consequence of your actions makes it impossible for him to stand by you either. Any future requests or references, mean that standing with you would risk damage to our relationships with the requesters because you've shown your commitments to be unreliable and your words to be meaningless. Of course, you are not welcome in the future to any tutor recruiting event. This is not punishment, but rather these are some of the consequences set in motion by anyone who reneges on an offer. I don't see a positive path or road through the scorched earth left in the aftermath of such an action. Your decision to accept an offer and continue to shop around for better positions is high-risk behavior not dissimilar to accepting a marriage proposal and continuing to date others. There are not many people who have the opportunity to build relationships with companies like Microsoft when those companies come to UCSD. When you accept then renege, you spit on all of those involved in the process that led to that offer. A job offer from the administration demands respect, and reneging on that offer is responding with disrespect! Telling your recruiter that no student has ever had negative consequences is like responding to a marriage proposal by offering a middle finger rather than your ring finger! I don't know any of the steps along your decision-making process or any of the possibilities you were considering, and so all of this comes as a BIG SURPRISE, and a very big disappointment. You made it harder for Microsoft to want to come to UCSD, you made it harder for Microsoft to offer any UCSD student a position, you made it harder for Microsoft to offer any UCSD tutor a position. You've tarnished our reputation through our association with you, and you should be ashamed. Declining a job due to content? Really? Did the content of the job change since you've accepted it? Your reason for reneging has no credibility whatsoever. It comes across as an obvious lie, condescending and discounting the efforts of everyone you expect will believe it.</p>
                        <p>As a matter of principle, I'm against paying students to complete their CAPE reviews. I consider the extra credit award, even so small, as such a payment. It's not earned, it's not merit, and so I'm not comfortable with the idea. I don't agree when other instructors give students grade benefits in exchange for their reviews. It took a lot of convincing from the tutoring staff for me to agree to implement such a suggestion to increase CAPE participation. I thought of the two extra credit points not as points themselves, but rather I thought they represented the same as allowing all students one extra week to complete one lab for full credit. The amount of points is insignificant, and in looking for any way possible to increase the CAPE participation, I agreed thinking it could only help.

                            The first thought at increasing CAPE participation was to include a CAPE link in the last lab, but that link was omitted, and its absence wasn't noted until after 2/3 of students had been checked off.

                            The next thought, which I thought was a really good one, was to give all students specific time in class to complete their CAPE review. This would be very much like how CAPE was administered when I was a student. Since Tuesday was a quiz day when everyone was present, that would be ideal. This is Fall quarter, and for some students new to UCSD, they don't know what CAPE is, and so I could introduce CAPE and its importance. This seemed perfect, and we'd get 100% participation, and we could move on. That's what we did. I saw everyone pull out their phone and their computer. They were silent for the 5 minutes we spent on this. When I saw that most people put their phones and computers away, I thought most were done, I thanked everyone genuinely, and administered the quiz. Later, when I checked CAPE participation, I was shocked to see that the review rate was still about 50%. My request was simple, short, important to me, important to the CSE department, important for future students, and I was disappointed and puzzled by the results. When working the class, I am 100% focused on students, their project and hopes for their futures. I expected that in return for my dedication to your futures, you'd dedicate 5 minutes to my future.

                            Due to the surprising result after witnessing everyone seemingly complete their reviews, I was back into the position I was earlier of looking for ways to improve CAPE participation. When the entire tutoring staff insisted that most other instructors have this practice, without other options presented, I thought, let's see if it makes a difference.

                            In general, I believe in free will with regard to CAPE reviews. In most past quarters, I don't even mention it. You get the emails. You should give the evaluations. I believe that some students don't know how much the faculty is evaluated based on the reviews. In my last CSE 110 class in Winter 2017, the students gave a lengthy applause at the end of the course which I appreciated. However, the CAPE reviews were the lowest I've had in any CSE 110 class. When I asked a few students about it, they said, "oh, you always get good reviews, and so I didn't bother submitting one." The CAPE review participation rate became newly important to me due to being formally evaluated by students who only have strong views rather than from the class as a whole.

                            Now you know a little bit more about the motivations behind my surprising actions of trying any way I could or any way the tutors could to increase CAPE review participation. Including the review as part of the last lab check off really seems to be the best way to raise participation. If you have a better solution, please let me know.

                            Thank you for your words stating your opinion. Thanks for mentioning professionalism in your response. Being professional is a real aspect of being successful as you move onward into industry, and so I am pleased that you are paying attention to an important yet easy to overlook aspect to building a positive future career.

                            Being professional, I shouldn't have to ask that students complete their CAPE review. Thinking about its purpose, every student should feel obligated to complete the review as a way for their voice to be heard and to improve education for those students in future courses. If that wasn't enough, then my request to complete the review should be enough because it's so easy and quick. If that wasn't enough, I made time in class for that specific task and watched all students with my own eyes performing this task. However, that wasn't enough either.

                            Unfortunately, it's a sad situation.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Body;