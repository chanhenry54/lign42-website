import React from 'react';
import './style.scss';
import 'antd/dist/antd.min.css';

import { Anchor, Timeline } from 'antd';

import rickroll from '../../assets/audio/rickroll.mp3';

// function to help us quickly import everything from a folder into a map
function importAll(r) {
    let things = {};
    r.keys().map((item, index) => {things[item.replace('./','')] = r(item); });
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
                    <Link href="#conclusion" title="conclusion" />
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/MOREmoji_uwu.svg/2048px-MOREmoji_uwu.svg.png" alt="uwu"></img>
                        </div>
                    </div>
                    <div id="history">
                        <h1 id="h1-title">history</h1>
                        <div id="content-body">
                            <p>The exact origin of "uwu" is unknown, but below is a timeline of how "uwu" has grown in popularity and meaning over the years in Internet culture.</p>
                            <Timeline mode="alternate">
                                <Timeline.Item label="October 14th, 2005">DaakuKitsune, Yu-Gi-Oh fanfiction Genie of the Puzzle, "Again, feel free to throw squids and fish at me. UwU I deserve it, you know." - <a href="https://knowyourmeme.com/memes/uwu">Know Your Meme</a></Timeline.Item>
                                <Timeline.Item label="August 16th, 2012">hyruleinbed (Urban Dictionary user), 2,500 upvotes (agreements), "UwU or uwu is another way of typing the smiley face :3, TwT or twt. it means happy, like an anime character's face when they're overjoyed." - <a href="https://knowyourmeme.com/memes/uwu">Know Your Meme</a></Timeline.Item>
                                <Timeline.Item label="2013">Furry Community, claiming OwO, claimed OwO and OwO insult - <a href="https://www.dictionary.com/e/slang/uwu/">Slang Dictionary</a></Timeline.Item>
                                <Timeline.Item label="May 12th, 2013">homuras (Tumblr user), 52,000 notes (likes, support, reblogs), "uwu isnt even a face to me anymore its actually the sound 'oowoo.'" - <a href="https://knowyourmeme.com/memes/uwu">Know Your Meme</a></Timeline.Item>
                                <Timeline.Item label="November 2013">Tumblr, backlash of uwu, poster suggesting older men using uwu to manipulate teenage girls - <a href="https://knowyourmeme.com/memes/uwu">Know Your Meme</a></Timeline.Item>
                                <Timeline.Item label="November 2nd, 2013">Tumblr, Tumblr tag "uwu culture", people were question what the tag meant - <a href="https://knowyourmeme.com/memes/uwu">Know Your Meme</a></Timeline.Item>
                                <Timeline.Item label="2014">anonymous user, claimed they heard the word more than they saw it, expanded the meaning of uwu - <a href="https://studybreaks.com/tvfilm/the-origin-of-the-word-uwu/">Study Breaks</a></Timeline.Item>
                                <Timeline.Item label="July 20th, 2015">akoolguy (Tumblr user), 55,000 notes (likes, support, reblogs), published an edit of the Wii that features uwu - <a href="https://i.kym-cdn.com/photos/images/newsfeed/001/088/574/a48.png">Wii uwu</a></Timeline.Item>
                                <Timeline.Item label="February 2018">Tumblr user, predators would use uwu wegistew to get closer to teenage girls, "People point out that hey, there's a lot of creepy grown-ass men who deliberately paint themselves as smol soft gentle boys so they can be as creepy as they want without consequence and, well, you know how that cookie crumbled." - <a href="https://www.dailydot.com/unclick/what-does-uwu-mean/">Daily Dot</a></Timeline.Item>
                                <Timeline.Item label="March 15th, 2018">Mark Hamill (Twitter user), posted uwu requested by a fan - <a href="https://twitter.com/HamillHimself/status/974329777262858240?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E974329777262858240%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.dictionary.com%2Fe%2Fslang%2Fuwu%2F">Mark Hamill's Twitter</a></Timeline.Item>
                                <Timeline.Item label="February 12th, 2020">Slang Dictionary, "Squee! Uwu is an emoticon depicting a cute face. It is used to express various warm, happy, or affectionate feelings. A closely related emoticon is owo, which can more specifically show surprise and excitement… There are many variations of uwu and owo, including and OwO, UwU, and OwU, among others." - <a href="https://www.dictionary.com/e/slang/uwu/">Slang Dictionary</a></Timeline.Item>
                                <Timeline.Item label="February 12th, 2020">Alexander Thian (Twitter user), using uwu as a word instead of a face, "Gemini: just because I flirt with you, it doesn't mean I uWu you." - <a href="https://twitter.com/aMrazing/status/1227668444536922112?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1227668444536922112%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.dictionary.com%2Fe%2Fslang%2Fuwu%2F">Alexander Thian's Twitter</a></Timeline.Item>
                            </Timeline>
                            <audio controls src={rickroll} />
                        </div>
                    </div>
                    <div id="related-works">
                        <h1 id="h1-title">related works</h1>
                        <div id="content-body">
                            <p>While there is very little existing literature on the popular usage of uwu, one thesis paper, authored by Bailey Bigott at the University of Georgia, provided us an extensive sociolinguistic perspective on the uwu register, which they name “Mock Infantile Speech” (MIS) [1]. This paper connects various phonological features and sociolinguistic associations of MIS to characterize a larger “uwu” persona. This persona indexes interest in subcultures such as gaming, anime, and “cute” aesthetics.</p>
                            <p>In particular, Bigott names pitch raising, sibilant retraction, liquid gliding and deletion, and interdental stopping to be characteristic phonological features of MIS.</p>
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
                        <h1 id="h1-title">findings</h1>
                        <div id="content-body">
                            <div id="orthography">
                                <h2>orthography</h2>
                            </div>
                            <div id="phonology">
                                <h2>phonology</h2>
                                <p>Through extensive phonological analysis of audio samples of the uwu register online, we have drafted a list of phonological rules that we find to be consistent across speakers and contexts. All spectrograms are plotted with a frequency range of 1 Hz to 5000 Hz.</p>
                                <ul>
                                    <li>liquid replacement: L → [w]</li> <br/>
                                    <div>
                                        <p>In the phonological rule above, L represents liquids. </p>
                                        <p>This is the most common and characteristic rule associated with the uwu register. This phonological rule almost perfectly mirrors its orthographic counterpart where “r”s and “l”s are replaced with “w”s. </p>
                                        <p>While this rule is applied to liquids in any environment, we notice that speakers may inconsistently ignore this rule for parts of a word. We hypothesize that this occurs when users have trouble maintaining speech in the uwu register and inadvertently slip back into Standard American English. In the few cases where this occurs, they occur word-finally.</p>
                                        <div>
                                            <p style={{margin: "0px"}}>Example: “free” /fɹiː/ → [fwiː]</p>
                                            <img src={images['wet.png']} alt="wet"/> 
                                            <img src={images['free.png']} alt="free" /> <audio controls src={audio['En-us-free.ogg.mp3']} />
                                            <img src={images['fwi.png']} alt="fwi" /> <audio controls src={audio['fwee.wav']} />
                                            <p>top: spectrogram of [fɹi:], bottom: spectrogram of [fwiː]</p>
                                        </div>
                                        <p>In the spectrogram for [fwi:], we can clearly see that F2 starts at 1200 Hz and moves to 2900 Hz, and F3 drops simultaneously. In the spectrogram for [fɹi:], we do not see a similar downward movement of F3.</p>
                                        <p>One exception to this rule we have found is that this rule does not apply to the dark [ɫ]. It may also be the case that this rule cannot apply to liquids at the end of a coda.</p>
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
                                        <p>In the phonological rule above, L represents liquids, and $ represents the syllable boundary, used to indicate that the liquid is in the coda of its syllable. C0 represents “any number of consonants, including none”, used to capture all possible coda clusters.
                                        Given that Standard American English does not allow [w] to be the coda of a syllable, we believe that this rule is phonotactically motivated by English coda constraints.
                                        </p>
                                        <div>
                                            <p>Example: “called” /kɔld/ → [kɔd]</p>
                                            <img src={images['called.png']} alt="called"/> <audio controls src={audio['En-us-called.ogg.mp3']} />
                                            <img src={images['cawd.png']} alt="cawd"/> <audio controls src={audio['cawd.wav']} />
                                            <p>top: spectrogram of [kɔld], bottom: spectrogram of [kɔd]</p>
                                        </div>
                                    </div>
                                    <li>post-onset with epenthesis: Ø → [w] / $ C0 [+consonantal −pharyngeal −lateral] _ V</li> <br/>
                                    <div>
                                        <p>In the phonological rule above, $ represents the syllable boundary, used to indicate that the consonant cluster is the onset of its syllable. C0 represents “any number of consonants, including none”, used to capture all possible onset clusters. </p>
                                        <p>[w] may not be inserted in the middle of an onset cluster between consonants; only between the onset cluster and the nucleus.</p>
                                        <p>This general rule unintentionally excludes onsets that end in [h]. For the sake of brevity, we exclude [h] from the rule, since including [h] would exclude the [+consonantal] feature and form a natural class with [ɹ j w], which we aim to exclude. However, since [hw] is a valid onset in American English, we believe that onsets ending in [h] may be subject to this rule, although we were not able to collect any data to support this hypothesis.</p>
                                        <p>This rule does not always apply to the same environments across speakers and contexts, however every speaker exhibits the ability to apply this rule. Identical syllables and words may be produced with or without the application of this rule across and within speakers. We hypothesize that this variation may simply be a form of free variation. Another hypothesis suggests that the variation in the application of this rule is related to the orthographic form of the word. One common trend we noticed among survey results was that respondents were hesitant to leave sequences of words without any orthographic changes (due to the lack of “r”s and “l”s) and would insert “w”s accordingly. Since [w] is restricted from English codas, speakers would naturally insert “w” in the onset of syllables. This hypothesis would mean that the rule is more likely to apply to words in environments deficient in “r”s and “l”s.</p>
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
                        </div>
                    </div>
                    <div id="conclusion">
                        <h1 id="h1-title">conclusion</h1>
                        <div id="content-body">
                            [inswat concwushion hya]
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Body;