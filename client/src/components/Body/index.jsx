import React from 'react';
import './style.scss';
import 'antd/dist/antd.min.css';

import { Anchor, Timeline } from 'antd';

// function to help us quickly import everything from a folder into a map
function importAll(r) {
    let things = {};
    r.keys().map((item, index) => {things[item.replace('./','')] = r(item); return [];});
    return things;
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

const audio = importAll(require.context('../../assets/audio', false, /\.(mp4|mp3|wav)$/));

const { Link } = Anchor;

const Body = () => {
    return (
        <div className="body">
            <Anchor>
                <div className="anchor">
                    <Link href="#title" title="home" />
                    <Link href="#background" title="background" />
                    <Link href="#history" title="history" />
                    <Link href="#related-works" title="related works"/>
                    <Link href="#findings" title="findings" />
                    <Link href="#future-work" title="future work" />
                    <Link href="#references" title="references" />
                </div>
            </Anchor>
            <div id="title">
                <h1>the uwu wegistew (´･ω･`)</h1>
                <h2>lign 42 winter 2022</h2>
                <h3>henry chan, eric xiao, faith lu, jacob lin, jenny bach</h3>
            </div>
            <div className="body-flex">
                <div className="body-container">
                    <div id="background">
                        <h1 id="h1-title">background</h1>
                        <div id="background-body">
                            <div>
                                <p>In the early 2000s, a new phrase was brought to life on the internet: <span style={{fontStyle: 'italic'}}>uwu</span>. Although its exact origins are unknown, uwu has become immensely popular, especially in the anime and furry communities. Its usage is often paired with a high-pitched cute-sy register of speech, which we dub the “uwu wegistew” (uwu register), produced through modifying speech or written media to match the tone of “uwu” in a manner akin to baby talk. Some individuals use this register in a mocking or ironic tone to joke around, while others use it unironically to give off the impression of cuteness or shyness. In both cases, audiences express feelings ranging from cringiness to adoration, depending on the usage.</p>
                                <p>The uwu register, upon its introduction into the internet, found its way into many forms of media. Such forms include videos depicting the register in songs and general daily communication, and copypastas that integrate the register in writing. One such example of the uwu register in the wild is a <a href="https://i-am-a-fish.tumblr.com/post/168157413417/imagine-reading-a-post-but-over-the-course-of-it" target="_blank" rel="noreferrer">copypasta by I am a fish on Tumblr</a>, which goes as follows:</p>
                                <p style={{fontStyle: 'italic'}}>Imagine reading a post, but over the course of it the quality seems to deteriorate and it gets wose an wose, where the swenetence stwucture and gwammer rewerts to a pwoint of uttew non swence, an u jus dont wanna wead it anymwore (o´ω｀o) awd twa wol owdewl iws jus awfwul (´･ω･`);. bwt tw powost iwswnwt obwer nyet, it gwos own an own an own an own. uwu wanyaa stwop weadwing bwut uwu cwant stop wewding, uwu stwartd thwis awnd ur gwoing two fwinibsh it nowo mwattew wat! uwu hab mwoxie kwiddowo, bwut uwu wibl gwib ub sowon. i cwan wite wike dis fwor owors, swo dwont cwalengbe mii..</p>
                                <p style={{fontStyle: 'italic'}}>… wbats dis??? uwu awe stwill weedinb mwie powost?? uwu habe awot ob detewemwinyanyatiom!! ｡◕‿◕｡! u habve comopweedid tha pwost, good job! </p>
                                <p>This copypasta starts off in regular and grammatically correct English and slowly integrates the uwu register until the tone of the post has completely changed. It also contains many popular features of the uwu register, most notably the kaomoji emoticons and distorted text.</p>
                                <p>In order to better understand the uwu register and how it is viewed by the general public, we decided to conduct research on various properties of the register from a linguistic perspective. Through our findings, we hope to provide key insights into the world of the uwu register.</p>
                            </div>
                            <div id="background-body-images">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/MOREmoji_uwu.svg/2048px-MOREmoji_uwu.svg.png" alt="uwu"/>
                                <img src="https://i.imgur.com/aMsEvh4.png?1" alt="owo2" />
                                <img src="https://cdn.discordapp.com/emojis/815334200558878780.webp?size=96&quality=lossless" alt="uwu2" />
                                <img src="https://pbs.twimg.com/media/Eio1KjeWsAItnuM.png" alt="owo"/>
                                <img src="https://64.media.tumblr.com/8184a4f199ff4bcaca9369597ff4d7ab/d79ed34618243d7a-ff/s640x960/b7084505d17272f9a6fe26de5c40979f2bf2f6ea.png" alt="pwease" />
                            </div>
                        </div>
                    </div>
                    <div id="history">
                        <h1 id="h1-title">history</h1>
                        <div id="content-body">
                            <p>The exact origin of "uwu" is unknown, but below is a timeline of how "uwu" has grown in popularity and meaning over the years in Internet culture.</p>
                            <Timeline mode="alternate">
                                <Timeline.Item label="October 14th, 2005">DaakuKitsune, Yu-Gi-Oh fanfiction Genie of the Puzzle, "Again, feel free to throw squids and fish at me. UwU I deserve it, you know." - <a href="https://knowyourmeme.com/memes/uwu" target="_blank" rel="noreferrer">Know Your Meme</a></Timeline.Item>
                                <Timeline.Item label="August 16th, 2012">hyruleinbed (Urban Dictionary user), 2,500 upvotes (agreements), "UwU or uwu is another way of typing the smiley face :3, TwT or twt. it means happy, like an anime character's face when they're overjoyed." - <a href="https://knowyourmeme.com/memes/uwu" target="_blank" rel="noreferrer">Know Your Meme</a></Timeline.Item>
                                <Timeline.Item label="2013">Furry Community, claiming OwO, claimed OwO and OwO insult - <a href="https://www.dictionary.com/e/slang/uwu/" target="_blank" rel="noreferrer">Slang Dictionary</a></Timeline.Item>
                                <Timeline.Item label="May 12th, 2013">homuras (Tumblr user), 52,000 notes (likes, support, reblogs), "uwu isnt even a face to me anymore its actually the sound 'oowoo.'" - <a href="https://knowyourmeme.com/memes/uwu" target="_blank" rel="noreferrer">Know Your Meme</a></Timeline.Item>
                                <Timeline.Item label="November 2013">Tumblr, backlash of uwu, poster suggesting older men using uwu to manipulate teenage girls - <a href="https://knowyourmeme.com/memes/uwu" target="_blank" rel="noreferrer">Know Your Meme</a></Timeline.Item>
                                <Timeline.Item label="November 2nd, 2013">Tumblr, Tumblr tag "uwu culture", people were question what the tag meant - <a href="https://knowyourmeme.com/memes/uwu" target="_blank" rel="noreferrer">Know Your Meme</a></Timeline.Item>
                                <Timeline.Item label="2014">anonymous user, claimed they heard the word more than they saw it, expanded the meaning of uwu - <a href="https://studybreaks.com/tvfilm/the-origin-of-the-word-uwu/" target="_blank" rel="noreferrer">Study Breaks</a></Timeline.Item>
                                <Timeline.Item label="July 20th, 2015">akoolguy (Tumblr user), 55,000 notes (likes, support, reblogs), published an edit of the Wii that features uwu - <a href="https://i.kym-cdn.com/photos/images/newsfeed/001/088/574/a48.png" target="_blank" rel="noreferrer">Wii uwu</a></Timeline.Item>
                                <Timeline.Item label="February 2018">Tumblr user, predators would use uwu wegistew to get closer to teenage girls, "People point out that hey, there's a lot of creepy grown-ass men who deliberately paint themselves as smol soft gentle boys so they can be as creepy as they want without consequence and, well, you know how that cookie crumbled." - <a href="https://www.dailydot.com/unclick/what-does-uwu-mean/" target="_blank" rel="noreferrer">Daily Dot</a></Timeline.Item>
                                <Timeline.Item label="March 15th, 2018">Mark Hamill (Twitter user), posted uwu requested by a fan - <a href="https://twitter.com/HamillHimself/status/974329777262858240?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E974329777262858240%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.dictionary.com%2Fe%2Fslang%2Fuwu%2F" target="_blank" rel="noreferrer">Mark Hamill's Twitter</a></Timeline.Item>
                                <Timeline.Item label="February 12th, 2020">Slang Dictionary, "Squee! Uwu is an emoticon depicting a cute face. It is used to express various warm, happy, or affectionate feelings. A closely related emoticon is owo, which can more specifically show surprise and excitement… There are many variations of uwu and owo, including and OwO, UwU, and OwU, among others." - <a href="https://www.dictionary.com/e/slang/uwu/" target="_blank" rel="noreferrer">Slang Dictionary</a></Timeline.Item>
                                <Timeline.Item label="February 12th, 2020">Alexander Thian (Twitter user), using uwu as a word instead of a face, "Gemini: just because I flirt with you, it doesn't mean I uWu you." - <a href="https://twitter.com/aMrazing/status/1227668444536922112?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1227668444536922112%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.dictionary.com%2Fe%2Fslang%2Fuwu%2F" target="_blank" rel="noreferrer">Alexander Thian's Twitter</a></Timeline.Item>
                            </Timeline>
                        </div>
                    </div>
                    <div id="related-works">
                        <h1 id="h1-title">related works</h1>
                        <div id="content-body">
                            <p>While there is very little existing literature on the popular usage of uwu, one thesis paper, authored by Bailey Bigott at the University of Georgia, provided us an extensive sociolinguistic perspective on the uwu register, which they name “Mock Infantile Speech” (MIS) [1]. This paper connects various phonological features and sociolinguistic associations of MIS to characterize a larger “uwu” persona. This persona indexes interest in subcultures such as gaming, anime, and “cute” aesthetics.</p>
                            <p style={{marginBottom: "0px"}}>In particular, Bigott names pitch raising, sibilant retraction, liquid gliding and deletion, and interdental stopping to be characteristic phonological features of MIS.</p>
                            <ul>
                                <li>Pitch raising: “The mean frequency for speakers using MIS was 349.2935 hertz (Hz), while speakers in the standard guise had a pitch average of 236.645 Hz.”</li>
                                <li>Sibilant retraction: “Nearly all speakers demonstrated retraction of some kind, with retraction of /s/ to /ʃ/ being much more frequent than the voiced counterpart /z/, possibly due to the infrequency of /ʒ/ in English.”</li>
                                <li>Liquid modification: “Speakers using Mock Infantile Speech generally glided and elided liquids at markedly different rates than speakers in the standard guise.” “Liquids tended to be modified in the mock guise following palatal and velar consonants and following vowels.”</li>
                                <li>Interdental stopping: “Speakers often change the voiced and voiceless interdental fricatives /θ/ and /ð/ to the alveolar stops /t/ and /d/, respectively.”</li>
                            </ul>
                            <p>Bigott specifically names TikTok and Youtube as prominent platforms on which MIS is used. According to Bigott, MIS “adopts features of child speech, creating an image of sensual hyperfemininity for consumption” in these online spaces. Bigott concluded that imitating child speech was the primary component of successfully producing MIS.</p>
                        </div>
                    </div>
                    <div id="findings">
                        <div id="findings-title">
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" id="h1-title">findings</a>
                            <img src="https://i.imgur.com/JaBzoAn.png?2" alt="bongo" />
                        </div>
                        <div id="content-body">
                            <p>We compiled video and audio data from social media websites and surveyed other university students in order to determine in what ways the uwu register is produced. We characterize the uwu register to be both a textual and vocal register, and we distinguish between the two domains in our results.</p>
                            <div id="orthography">
                                <h2>orthography</h2>
                                <p>Orthography is the set of conventions and norms used to dictate how language should be written. In this study, we are interested in exactly how people uwu-ify words in text. An uwu-ification of a word is an alternative way to spell a word such as to convey that the writer is writing with the uwu register. In an initial survey of online text data, we find that there may be several different ways to uwu-ify a word. A consistent trend we see among both acceptability rankings and respondent comments is that the degree to which an uwu-ification deviates from the base word is inversely proportional to its acceptability. Several respondents expressed distaste towards over-uwu-ification and preference for following few simple rules.</p>
                                <p style={{marginBottom: 0}}>In our survey, we presented particular words and possible uwu-ifications to respondents and asked them to rate the acceptability of each uwu-ification of the word on a five point Likert scale, ranging from “not acceptable” to “fully acceptable”. The uwu-ifications of each word were generated by applying selections of orthographic rules to each word, which we derived from our initial survey of text data. The notable orthographic rules we employed are:</p>
                                <ul style={{marginBottom: 0}}>
                                    <li>“r” and “l” replacement with “w”
                                        <ul>
                                            <li>Total replacement</li>
                                            <li>Initial replacement</li>
                                        </ul>
                                    </li>
                                    <li>“w” insertion</li>
                                    <li>Consonant deletion</li>
                                </ul>
                                <p>We employed two different versions of the “r” and “l” replacement rule: the total replacement rule replaces all instances of “r” and “l” in a word with “w”, and the initial replacement rule only replaces the first instance of “r” and “l” with “w”.</p>
                                <p>We sampled uwu-ifications and collected ratings for 12 different words. Quantitative analysis was performed by mapping choices on the Likert scale to integers along the range from 0 to 4, inclusive, with 0 being most unacceptable and 4 being most acceptable. The scores for each uwu-ification for each word is averaged over all respondents.</p>
                                <p>The uwu-ification that was identical to the base word (no orthographic change) was the highest rated uwu-ification for 8 out of 12 words, and the second highest for 3 words.</p>
                                <h3>“r” and “l” replacement with “w”</h3>
                                <p>We applied this rule to 8 words, and for 2 of those words we could distinguish between total replacement and initial replacement. The uwu-ification generated from this rule is the highest rated form for 3 of these words, second highest for 4 words, and third highest for 1 word. Initial replacement is second highest and third highest for the two words.</p>
                                <img src={images['rlreplacement.png']} alt="graph1"/>
                                <p>We notice that there is a consistent trend in acceptability ratings related to the position of the “r” or “l” consonant. When “r” or “l” is before a vowel, the acceptability of the uwu-ification generated from this rule is higher than that of the base word. Inversely, when “r” or “l” is after a vowel, the acceptability of the uwu-ification generated from this rule is lower than that of the base word. This suggests that the orthographic rule that informs how “r” and “l” consonants are replaced is dependent on the environment of the replaced consonant.</p>
                                <img src={images['itreplacement.png']} alt="graph2"/>
                                <p>For the first word, “structure”, there is little variation in the acceptability across the three conditions. For the second word, “rather”, there is a significant decrease in acceptability when we replace the latter “r”, which occurs after a vowel. This supports our hypothesis that replacing “r”s and “l”s after vowels are generally not acceptable.</p>
                                <h3>“w” insertion</h3>
                                <p>There are 5 words we applied this rule to for which we can isolate the effects of this rule alone. For each word we insert the “w” after the first non-”r” non-”l” consonant cluster in the word. In the case of “and”, we insert after the vowel to produce “awnd” instead.</p>
                                <img src={images['insertion.png']} alt="graph3"/>
                                <p>Consistently across all words, “w” insertion alone is correlated with a decrease in acceptability by a significant degree, with the exception of “post”/”pwost”.</p>
                                <h3>Consonant Deletion</h3>
                                <p>There are 5 words we applied this rule to for which we can isolate the effects of this rule alone. For each word, we delete the last consonant. In the case of “worse”, we instead delete the “r” to produce “wose” instead.</p>
                                <img src={images['consonantdeletion.png']} alt="graph4"/>
                                <p>Similarly to our results for “w” insertion, consonant deletion alone is correlated with a decrease in acceptability across all words.</p>
                                <p>These findings describe how each orthographic rule is correlated to the acceptability of a word in isolation from each other. We also surveyed people for the acceptability of uwu-ifications that involved multiple rules, however these were all consistently and significantly less acceptable than the base forms. Notable exceptions to this are the uwu-ifications of “give” and “completed” as “gib” and “compweded”, respectively. Both of these productions score higher than the base words. The scarcity of uwu-ifications that scored well provides evidence for the aforementioned idea that words could become over-uwu-ified and thus unacceptable.</p>
                            </div>
                            <div id="phonology">
                                <h2>phonology</h2>
                                <p>Phonology is the study of how languages organize sounds and how sounds change in speech. The way that sounds change in language is described using phonological rules that delineate what features of a sound change and in what conditions the rule would apply. In this study, we are interested in what ways the uwu register differs phonologically from Standard American English. Through extensive phonological analysis of audio samples of the uwu register online, we have drafted a list of phonological rules that we find to be consistent across speakers and contexts. In the analysis, we plot audio samples onto spectrograms, which display time on the horizontal axis, frequency on the vertical axis, and intensity of a given frequency at a given time by its darkness. Spectrograms are often used in phonological studies to see what sounds are present in speech and how they are produced. In these spectrograms, we look for formants, which look like dark horizontal bands that can move up and down, to distinguish between sounds. All spectrograms are plotted with a frequency range of 1 Hz to 5000 Hz. All frequency measurements are performed using the <a href="https://www.fon.hum.uva.nl/praat/" target="_blank" rel="noreferrer">Praat phonological analysis software tool.</a></p>
                                <ul>
                                    <li>liquid replacement: L → [w]</li> <br/>
                                    <div>
                                        <p>In the phonological rule above, L represents liquids, which is the class of phonemes that includes the “r” and “l” sounds in Standard American English. We read this rule to say: “liquids are replaced by the sound [w]”. </p>
                                        <p>This is the most common and characteristic rule associated with the uwu register. This phonological rule almost perfectly mirrors its orthographic counterpart where “r”s and “l”s are replaced with “w”s. </p>
                                        <p>While this rule is applied to liquids in any environment, we notice that speakers may inconsistently ignore this rule for parts of a word. We hypothesize that this occurs when users have trouble maintaining speech in the uwu register and inadvertently slip back into Standard American English. In the few cases where this occurs, they occur at the end of a word (i.e. word-finally).</p>
                                        <div>
                                            <p style={{margin: "0px"}}>Example: “free” /fɹiː/ → [fwiː]</p>
                                            <img src={images['wet.png']} alt="wet"/> 
                                            <img src={images['free.png']} alt="free" /> <audio controls src={audio['En-us-free.ogg.mp3']} />
                                            <img src={images['fwi.png']} alt="fwi" /> <audio controls src={audio['fwee.wav']} />
                                            <p>top: spectrogram of [fɹi:], bottom: spectrogram of [fwiː]</p>
                                        </div>
                                        <p>In the spectrogram for [fwi:], we can clearly see that the second formant (F2) starts at 1200 Hz and moves to 2900 Hz, and the third formant (F3) drops simultaneously. In the spectrogram for [fɹi:], we do not see a similar downward movement of F3.</p>
                                        <p>One exception to this rule we have found is that this rule does not apply to the dark [ɫ], which is pronounced like a normal “l” in English but with the back of the tongue raised slightly. It may also be the case that this rule is restricted based on where in a syllable the phoneme is. Syllables are composed of three parts: an onset which consists of the consonant sounds before the nucleus, the nucleus which consists of the vowel sound(s), and the coda which consists of the consonant sound after the nucleus. We might also hypothesize that this rule cannot apply to liquids at the end of a coda, which would equivalently account for this exception.</p>
                                        <div>
                                            <p>Example: “bill” /bɪl/ → [bwɪɫ]</p>
                                            <img src={images['bill.png']} alt="bill"/> <audio controls src={audio['En-us-bill.ogg.mp3']} />
                                            <img src={images['bwill.png']} alt="bwill" /> <audio controls src={audio['bwill.wav']} />
                                            <p>top: spectrogram of [bɪɫ], bottom: spectrogram of [bwɪɫ]</p>
                                        </div>
                                        <div>
                                            <p>Example: “little” /lɪɾl/ → [wɪɾɫ]</p>
                                            <img src={images['little.png']} alt="little" /> <audio controls src={audio['En-us-little.ogg.mp3']} />
                                            <img src={images['wittle.png']} alt="wittle" /> <audio controls src={audio['wittle.wav']} />
                                            <p>top: spectrogram of [lɪɾɫ], bottom: spectrogram of [wɪɾɫ]</p>
                                        </div>
                                    </div>
                                    <p>We notice in both spectrograms for both examples that the ends do not show any movement of F2 or F3 that might be indicative of [w] replacement. It appears that the dark [ɫ] (or simply syllable-final liquids) is not transformed.</p>
                                    <li>liquid deletion: L → Ø / _ C0 $</li> <br />
                                    <div>
                                        <p>In the phonological rule above, L represents liquids, and $ represents the syllable boundary, used to indicate that the liquid is in the coda of its syllable. C0 represents “any number of consonants, including none”, used to capture all possible coda clusters. We read this rule to say: “liquids are deleted if they are at the beginning of a coda”. Given that Standard American English does not allow [w] to be the coda of a syllable, we believe that this rule is phonotactically motivated by English coda constraints.</p>
                                        <div>
                                            <p>Example: “called” /kɔld/ → [kɔd]</p>
                                            <img src={images['called.png']} alt="called"/> <audio controls src={audio['En-us-called.ogg.mp3']} />
                                            <img src={images['cawd.png']} alt="cawd"/> <audio controls src={audio['cawd.wav']} />
                                            <p>top: spectrogram of [kɔld], bottom: spectrogram of [kɔd]</p>
                                        </div>
                                    </div>
                                    <li>post-onset [w] epenthesis: Ø → [w] / $ C0 [+consonantal −pharyngeal −lateral] _ V</li> <br/>
                                    <div>
                                        <p>In the phonological rule above, $ represents the syllable boundary, used to indicate that the consonant cluster is the onset of its syllable. C0 represents “any number of consonants, including none”, used to capture all possible onset clusters. We read this rule to say: “insert a [w] sound at the end of an onset if the immediately preceding consonant is not a liquid or glide”.</p>
                                        <p>[w] may not be inserted in the middle of an onset cluster between consonants; only between the onset cluster and the nucleus.</p>
                                        <p>This general rule unintentionally excludes onsets that end in [h]. For the sake of brevity, we exclude [h] from the rule, since including [h] would exclude the [+consonantal] feature and form a natural class with [ɹ j w], which we aim to exclude. However, since [hw] is a valid onset in American English, we believe that onsets ending in [h] may be subject to this rule, although we were not able to collect any data to support this hypothesis.</p>
                                        <p>This rule does not always apply to the same environments across speakers and contexts, however every speaker exhibits the ability to apply this rule. Identical syllables and words may be produced with or without the application of this rule across and within speakers. We hypothesize that this variation may simply be a form of free variation, meaning speakers are at liberty to choose when to apply this rule without sounding ungrammatical. Another hypothesis suggests that the variation in the application of this rule is related to the orthographic form of the word. One common trend we noticed among survey results was that respondents were hesitant to leave sequences of words without any orthographic changes (due to the lack of “r”s and “l”s) and would insert “w”s accordingly. Since [w] is restricted from English codas, speakers would naturally insert “w” in the onset of syllables. This hypothesis would mean that the rule is more likely to apply to words in environments deficient in “r”s and “l”s.</p>
                                        <div>
                                            <p>Example: “been” /bɪn/ → [bwɪn]</p>
                                            <img src={images['been.png']} alt="been"/> <audio controls src={audio['En-us-been.ogg.mp3']} />
                                            <img src={images['bwin.png']} alt="bwin"/> <audio controls src={audio['bwin.wav']} />
                                            <p>top: spectrogram of [bɪn], bottom: spectrogram of [bwɪn]</p>
                                        </div>
                                        <p>We notice in the spectrogram for [bwɪn] that F2 raises from 1000 Hz to 1600 Hz before the production of [ɪ]. In the spectrogram for [bɪn], no such formant movement is seen between the productions of [b] and [ɪ].</p>
                                    </div>
                                </ul>
                            </div>
                            <div id="semantics">
                                <h2>semantics summary</h2>
                                <p>Semantics is the study of what words mean in language. Sometimes linguists also want to know what the separable, meaningful units of words mean; these units are called morphemes.	In this study, we want to investigate what “uwu” as its related forms mean as morphemes. We see in our survey analysis that these “uwu” morphemes are recognized to be faces, and their meaning derived from the facial expressions.</p>
                                <img src={images['uwu.png']} alt="uwu graph" />
                                <p>Our survey results show that “uwu” is most strongly associated with cuteness, contentedness, and innocence. “uwu” is recognized to be a pair of shut eyes with a cat’s mouth between them. This evokes the imagery of a sleeping cat, which conveys the aforementioned feelings. Survey responses have also indicated that people treat “uwu” as the base morpheme that other morphemes are derived from.</p>
                                <img src={images['owo.png']} alt="owo graph" />
                                <p>The morpheme “owo”, similarly to “uwu”, carries a cute feeling, but it additionally communicates a feeling of surprise and shock. It has also been described to indicate that the speaker is alert and interested. “owo” is recognized to be a pair of wide open eyes and a cat’s mouth in between them. This evokes the imagery of an alert cat. Perhaps the best-known usage of “owo” is in the phrase, “owo, what’s this”, which has gained notoriety as the opening words of a <a href="https://www.reddit.com/r/copypasta/comments/8oygtv/owo_whats_this_complete_edition/" target="_blank" rel="noreferrer">sexually explicit furry roleplay copypasta.</a></p>
                                <img src={images['UwU2.png']} alt="UwU graph" />
                                <p>The “UwU” morpheme has been noted to have the same cute denotation that the “uwu” morpheme does. In particular, “UwU” is recognized to have larger eyes than the “uwu” morpheme. Respondents have additionally noted that this morpheme gives off a feeling of being more “intensely” cute or more “aggressive” than the original “uwu”. This suggests that capitalization of the u’s acts as a semantic unit that acts as an intensifier, and perhaps could be its own morpheme.</p>
                                <img src={images['OwU.png']} alt="OwU graph" />
                                <p>The “OwU” morpheme was categorized as cute similarly to the other morphemes, but it also received some negative responses: some stated that they had never seen it before and even claimed it was ungrammatical altogether. This morpheme is recognized to be a winking face.</p>
                                <img src={images['uWu3.png']} alt="uWu graph" />
                                <p>The “uWu” morpheme is recognized to be the same as the “uwu” morpheme with a larger mouth. Most respondents seem to agree that this conveys aggression and grumpiness. A sizable portion of respondents also have not seen this morpheme before, however.</p>
                                <img src={images['ÚwÚ.png']} alt="ÚwÚ graph" />
                                <p>The “ÚwÚ” morpheme is recognized to be the same as “UwU” with the addition of accent markers that people interpret as eyebrows. The most common consensus is that this morpheme expresses pride, smugness, arrogance, and snarkiness.</p>
                                <img src={images['ÒwÓ.png']} alt="ÒwÓ graph" />
                                <p>The “ÒwÓ” morpheme is recognized to be the same as “owo” with larger eyes and accent markers as eyebrows. Many respondents seem to agree that this conveys anger and rage but also a mischievous, devious, chaotic, and devilish personality type. Again, the capitalization of the o’s communicates the idea of heightened intensity.</p>
                                <img src={images['Uwu4.png']} alt="Uwu graph" />
                                <p>The “Uwu” morpheme does not seem to be strongly associated with any emotion. Instead, survey respondents noted that it communicated to them that the texter had auto-capitalization enabled on their device. Some claim that this form is incorrect and thus ungrammatical.</p>
                                <img src={images['uwU5.png']} alt="uwU graph" />
                                <p>The “uwU” morpheme also does not seem to be strongly associated with any emotion. However, people do not associate this with auto-capitalization functionality, as those kinds of functions do not capitalize the end of a word. People generally claim that this is ungrammatical.</p>
                                <p>Overall, uwu and its related forms all generally convey a feeling of cuteness. The nuance behind each morpheme is modulated by what elements compose the facial expression that the morpheme encodes, and how those elements themselves are manipulated. We see consistently that variations of “owo” carry a sense of alertness and active interest. Capitalization of the different elements serves to communicate an intense emotion. However, the consensus also shows that the morpheme must be symmetrically capitalized, or otherwise deemed ungrammatical. Accent markers as eyebrows are used to alter and give nuance to the emotion communicated by the morpheme.</p>
                            </div>
                            <div id="social-perception">
                                <h2>social perception</h2>
                                <p>Through our survey, we found the most common thought expressed about the uwu register was its <span style={{textDecoration: 'underline'}}>focus on cuteness</span> (or attempt at cuteness), followed by its association with a <span style={{textDecoration: 'underline'}}>high-pitched voice and baby talk</span>. Additionally, the most common emotion among respondents towards usage of the uwu register was <span style={{textDecoration: 'underline'}}>annoyance and displeasure</span>. Other thoughts mentioned by survey respondents included impressions that the register was cringey, jokey, and ironic or sarcastic.</p>
                                <img src={images['registerDescriptor.png']} alt="register descriptor" />
                                <p>The perception towards individuals that use the register had a natural division into two categories: ironic usage versus unironic usage. Ironic usage was considered to be funny and often paired it with a joking or lighthearted scenario, while unironic usage was found to be more weird. There were a number of respondents that mentioned their perceptions of an individual would stay the same, regardless of whether or not the individual uses the uwu register, but the majority of respondents identified that they would associate the individual with a more negative emotion.</p>
                                <img src={images['respondantPerceptions.png']} alt="respondant perceptions" />
                                <p>The most commonly uwu-register-associated communities from the survey explicitly mentioned by respondents was dominated by the anime/anime adjacent communities, followed by the furry community.</p>
                                <img src={images['associatedCommunities.png']} alt="associated communities" />
                                <p>Interestingly, demographic data from the survey showed many survey respondents also associated themselves with the anime community:</p>
                                <img src={images['respondantCommunities.png']} alt="respondant communities" />
                                <p>Our results can be summarized as follows: according to the survey respondents, there is a general negative social perception towards the uwu register and users of the register, however some find it funny if used ironically. The register is most commonly seen/used in anime and furry communities, though it does appear in large, modern communities like the gaming community.</p>
                            </div>
                        </div>
                    </div>
                    <div id="future-work">
                        <h1 id="h1-title">future work</h1>
                        <div id="content-body">
                            <p>Our findings revealed several gaps in our survey that could be filled in with further data collection. Firstly, we were able to explore the effects of certain orthographic rules on the generation of uwu-ifications. However, the data we have collected is quite scant, and does not provide enough evidence to make any strong conclusions about what the real conditions of the orthographic rules are. There were multiple points during the phonological analysis in which we realized that the conditions of a phonological rule could be accounted for by taking into consideration other linguistic features, such as syllable constraints. We could support or disprove these hypotheses by collecting more data with a focus on obtaining more information about the kinds of environments these phonological rules would apply. We would also like to collect information about how much people personally use the uwu register in their daily lives, as personal familiarity with the register may allow these respondents to provide more nuance about the linguistic features of the register</p>
                            <p>Survey responses also revealed other dimensions of the uwu register that we had not considered exploring. For example, some survey responses remarked that “uwu” may be realized as a part of speech and used in a sentence. In this study we had only considered “uwu” and its related forms as morphemes that do not have any syntactic constraints and act as mood or tone markers. This study has also presumed that the data we collected comes from speakers of Standard American English. Since we surveyed mostly students in an American university and collected data from English online sources, this assumption may very well be true, but we believe that it would merit the effort to investigate how the uwu register varies or would vary cross-linguistically.</p>
                        </div>
                    </div>
                    <div id="references">
                        <h1 id="h1-title">references</h1>
                        <div id="content-body">
                            <ul>
                                <li>Astley, R. (2009, October 24). <span>Rick Astley - Never Gonna Give You Up (Official Music Video)</span> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=dQw4w9WgXcQ</a></li>
                                <li>[1] Bigott, B., & Forrest, J. (2021). Mock infantile speech: A Sociolinguistic perspective (thesis).</li>
                                <li>bones. (2019, February 5). <span>when ur dm/crush does some cute shit and u gaze lovingly at them from a few feet away and…</span> [Image attached]. emoji.gg. <a href="https://emoji.gg/emoji/8782_AwwGosh" target="_blank" rel="noreferrer">https://emoji.gg/emoji/8782_AwwGosh</a></li>
                                <li>draw-some-emojis. (2020). <span>👉👈 emojis. Please read our ToS on our pinned post before using our emojis</span> [Blog post with images]. Tumblr. <a href="https://discord-emoji.tumblr.com/post/651506334484840448/draw-some-emojis-emojis-please-read-our-tos-on" target="_blank" rel="noreferrer">https://discord-emoji.tumblr.com/post/651506334484840448/draw-some-emojis-emojis-please-read-our-tos-on</a></li>
                                <li>Dvortygirl. (2005, August 14). <span>Pronunciation of the word 'free' in US English</span> [Audio]. Wikimedia Commons. <a href="https://commons.wikimedia.org/wiki/File:En-us-free.ogg" target="_blank" rel="noreferrer">https://commons.wikimedia.org/wiki/File:En-us-free.ogg</a></li>
                                <li>Dvortygirl. (2006 October 1). <span>Pronunciation of the term in US English</span> [Audio]. Wikimedia Commons. <a href="https://commons.wikimedia.org/wiki/File:En-us-bill.ogg" target="_blank" rel="noreferrer">https://commons.wikimedia.org/wiki/File:En-us-bill.ogg</a></li>
                                <li>Dvortygirl. (2006, March 16). <span>Pronunciation of the term in US English</span> [Audio]. Wikimedia Commons. <a href="https://commons.wikimedia.org/wiki/File:En-us-little.ogg" target="_blank" rel="noreferrer">https://commons.wikimedia.org/wiki/File:En-us-little.ogg</a></li>
                                <li>Dvortygirl. (2006, September 29). <span>Pronunciation of the term in US English</span> [Audio]. Wikimedia Commons. <a href="https://commons.wikimedia.org/wiki/File:En-us-called.ogg" target="_blank" rel="noreferrer">https://commons.wikimedia.org/wiki/File:En-us-called.ogg</a></li>
                                <li>Dvortygirl. (2006, September 27). <span>Pronunciation of the term in US English</span> [Audio]. Wikimedia Commons. <a href="https://commons.wikimedia.org/wiki/File:En-us-been.ogg" target="_blank" rel="noreferrer">https://commons.wikimedia.org/wiki/File:En-us-been.ogg</a></li>
                                <li>i-am-a-fish. (2017, December 3). <span>Imagine reading a post, but over the course of it the quality seems to deteriorate and it gets wose an ...</span> [Blog post]. Tumblr. <a href="https://i-am-a-fish.tumblr.com/post/168157413417/imagine-reading-a-post-but-over-the-course-of-it" target="_blank" rel="noreferrer">https://i-am-a-fish.tumblr.com/post/168157413417/imagine-reading-a-post-but-over-the-course-of-it</a></li>
                                <li>Jeorge ジョジ Ch. (2021, October 17). <span>This is what Fauna's UwU voice sounds like!</span> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=4cQ5QBkp8IY" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=4cQ5QBkp8IY</a></li>
                                <li>[2] Kirby, J 2012, Lecture 15: Nasals, approximants, rhotics, and laterals, lecture notes, Cơ sở âm vị học và ngữ âm học (Foundations of phonetics and phonology), The University of Edinburgh, delivered 26 July 2012.</li>
                                <li>mothcharm. (2020, August 28). <span>All three sets of emojis are now compiled into expression memes by popular demand! Please credit me if you use…</span> [Images attached] [Tweet]. Twitter. <a href="https://twitter.com/mothcharm/status/1308918275116597248" target="_blank" rel="noreferrer">https://twitter.com/mothcharm/status/1308918275116597248</a></li>
                                <li>remnantsofpluto. (2021, February 25). <span>oh that’s so scawy owo</span> [Blog post with video]. Tumblr. <a href="https://remnantsofpluto.tumblr.com/post/644158958292090880/oh-thats-so-scawy-owo" target="_blank" rel="noreferrer">https://remnantsofpluto.tumblr.com/post/644158958292090880/oh-thats-so-scawy-owo</a></li>
                                <li>StrayRogue. (2018, May 5). <span>smack smack</span> [GIF attached] [Tweet]. Twitter. <a href="https://twitter.com/StrayRogue/status/992994454058381312">https://twitter.com/StrayRogue/status/992994454058381312</a></li>
                                <li>the-spooky-lee. (2021, August 13). <span>Reading shit from Helluva Boss and other shows in a voice that is not ok-</span> [Blog post with audio file]. Tumblr. <a href="https://the-spooky-lee.tumblr.com/post/659408226557755392/reading-shit-from-helluva-boss-and-other-shows-in" target="_blank" rel="noreferrer">https://the-spooky-lee.tumblr.com/post/659408226557755392/reading-shit-from-helluva-boss-and-other-shows-in</a></li>
                                <li>WebFreak. (2019, October 4). <span>I'd just like to interject for a moment uwu</span> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=QXUSvSUsx80" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=QXUSvSUsx80</a></li>
                            </ul>
                            <div style={{display:'flex', justifyContent: 'center', gap: "10px"}}><p>thanks for helping us find emojis truong!!!</p> <img src="https://i.imgur.com/YYx9gVQ.jpg" alt='TRUONG' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;