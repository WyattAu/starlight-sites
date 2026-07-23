#!/usr/bin/env node

/**
 * expand-test-prep-content.mjs -- Expands content for test preparation sites.
 *
 * Creates detailed content files for all test prep categories.
 *
 * Usage:
 *   node scripts/expand-test-prep-content.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const CONTENT = {
  // UK Driving Test - Complete Theory Test
  'driving-uk': {
    'theory-test': {
      'multiple-choice': {
        title: 'Multiple Choice Questions',
        content: `# Theory Test: Multiple Choice

## Overview
The UK theory test consists of 50 multiple choice questions. You need to score 43 out of 50 (86%) to pass.

## Question Types

### Road Signs
- Regulatory signs (prohibitions, requirements)
- Warning signs (hazards ahead)
- Information signs (directions, services)

### Rules of the Road
- Speed limits
- Right of way
- Overtaking rules
- Parking regulations

### Vehicle Safety
- Tyre conditions
- Lights and signals
- Mirrors and visibility
- Emergency equipment

### Environment
- Eco-driving techniques
- Pollutant emissions
- Noise reduction

## Practice Questions

### Section 1: Road Signs

**Q1: What does a red circle with a white background indicate?**
a) Warning sign
b) Regulatory sign
c) Information sign
d) Direction sign

**Correct Answer:** b) Regulatory sign

**Q2: What does a blue circle indicate?**
a) Prohibition
b) Warning
c) Mandatory instruction
d) Information

**Correct Answer:** c) Mandatory instruction

**Q3: What does a triangle indicate?**
a) Regulatory sign
b) Warning sign
c) Information sign
d) Direction sign

**Correct Answer:** b) Warning sign

### Section 2: Speed Limits

**Q4: What is the speed limit on a single carriageway road?**
a) 30 mph
b) 50 mph
c) 60 mph
d) 70 mph

**Correct Answer:** c) 60 mph

**Q5: What is the speed limit on a dual carriageway?**
a) 30 mph
b) 50 mph
c) 60 mph
d) 70 mph

**Correct Answer:** d) 70 mph

**Q6: What is the speed limit on a motorway?**
a) 50 mph
b) 60 mph
c) 70 mph
d) 80 mph

**Correct Answer:** c) 70 mph

### Section 3: Right of Way

**Q7: Who has right of way at a roundabout?**
a) The vehicle on the left
b) The vehicle on the right
c) The vehicle entering the roundabout
d) The vehicle already on the roundabout

**Correct Answer:** d) The vehicle already on the roundabout

**Q8: When must you give way to pedestrians?**
a) At all times
b) Only at zebra crossings
c) Only at traffic lights
d) Only when they are on the pavement

**Correct Answer:** a) At all times

### Section 4: Vehicle Safety

**Q9: What is the minimum legal tyre tread depth?**
a) 1.0mm
b) 1.6mm
c) 2.0mm
d) 2.5mm

**Correct Answer:** b) 1.6mm

**Q10: How often should you check your tyres?**
a) Once a year
b) Once a month
c) Before every journey
d) Only when they look worn

**Correct Answer:** c) Before every journey

## Study Tips

1. **Practice daily** - Use official DVSA practice tests
2. **Learn the signs** - Visual memory helps
3. **Understand the rules** - Don't just memorize
4. **Review mistakes** - Focus on weak areas
5. **Take mock tests** - Simulate exam conditions
`,
      },
      'hazard-perception': {
        title: 'Hazard Perception',
        content: `# Hazard Perception Test

## Overview
The hazard perception test shows 14 video clips of everyday driving scenes. You need to score 44 out of 75 (59%) to pass.

## How It Works

### Scoring System
- **5 points**: Spotting a developing hazard early
- **4 points**: Spotting a developing hazard slightly later
- **3 points**: Spotting a developing hazard at a moderate time
- **2 points**: Spotting a developing hazard late
- **1 point**: Spotting a developing hazard very late
- **0 points**: Not spotting the hazard

### What is a Developing Hazard?
A developing hazard is something that:
1. Requires you to change speed or direction
2. Is getting closer to you
3. You need to take action to avoid

## Common Hazards

### Road Users
- **Pedestrians**: Crossing road, stepping off pavement
- **Cyclists**: Riding in road, indicating to turn
- **Motorcyclists**: Filtering, overtaking
- **Other vehicles**: Pulling out, braking, turning

### Road Conditions
- **Traffic lights**: Changing to red
- **Road works**: Lane closures, narrow lanes
- **Weather**: Rain, fog, ice
- **Road surface**: Potholes, debris

### Animals
- **Dogs**: Running into road
- **Horses**: Being led or ridden
- **Wild animals**: Crossing road

## Practice Clips

### Clip 1: Pedestrian Crossing
**Scenario**: You're driving on a residential street. A pedestrian is waiting at a crossing.
**Developing Hazard**: The pedestrian steps onto the crossing as you approach.
**Action**: Reduce speed and be prepared to stop.
**Score**: 5 points (early detection)

### Clip 2: Cyclist Ahead
**Scenario**: You're following a cyclist on a country road.
**Developing Hazard**: The cyclist indicates right and moves to the center of the lane.
**Action**: Slow down and wait for a safe opportunity to pass.
**Score**: 4 points (good detection)

### Clip 3: Traffic Lights
**Scenario**: You're approaching traffic lights that are green.
**Developing Hazard**: The lights change to amber, then red as you approach.
**Action**: Stop safely before the crossing.
**Score**: 3 points (moderate detection)

## Tips for Success

1. **Click when you see a potential hazard** - Don't wait for it to develop
2. **Click multiple times** - If the hazard develops over time
3. **Watch the whole clip** - Hazards can appear at any time
4. **Practice with official DVSA clips** - They show the expected timing
5. **Stay focused** - Some clips have no hazards (scoring clips)
`,
      },
    },
    'practical-test': {
      'driving-manoeuvres': {
        title: 'Driving Manoeuvres',
        content: `# Driving Manoeuvres

## Overview
The practical driving test includes several manoeuvres you must demonstrate. You'll be asked to perform 1-2 of these.

## Manoeuvres

### 1. Parallel Parking
**What you'll be asked to do:**
- Pull up alongside a parked car
- Reverse into a space behind it
- Finish within 2 car lengths and 30cm of the kerb

**Steps:**
1. Signal right and pull up alongside the parked car (about 1 metre away)
2. Check all mirrors and blind spots
3. Select reverse gear
4. Steer full lock right when the back of your car is level with the back of the parked car
5. Straighten the wheels when parallel to the kerb
6. Stop when you're about 2 car lengths behind the parked car

**Common Mistakes:**
- Not checking mirrors and blind spots
- Getting too close to the parked car
- Not finishing parallel to the kerb

### 2. Bay Parking (Reverse)
**What you'll be asked to do:**
- Drive into a parking bay
- Reverse into a space
- Finish within the lines

**Steps:**
1. Drive past the bay you want to use
2. Position yourself about 1 metre from the parked cars
3. Check all mirrors and blind spots
4. Select reverse gear
5. Steer into the bay, adjusting as needed
6. Straighten up and stop within the lines

**Common Mistakes:**
- Crossing the lines
- Not checking mirrors
- Getting too close to other cars

### 3. Bay Parking (Forward)
**What you'll be asked to do:**
- Drive forward into a parking bay
- Finish within the lines

**Steps:**
1. Approach the bay slowly
2. Position yourself about 1 metre from the parked cars
3. Turn into the bay when your mirror is level with the near side of the bay
4. Straighten up and stop within the lines

### 4. Pull Up on the Right
**What you'll be asked to do:**
- Pull up on the right side of the road
- Reverse back 2 car lengths
- Rejoin traffic safely

**Steps:**
1. Check mirrors and signal right
2. Pull up alongside parked cars on the right
3. Check all mirrors and blind spots
4. Reverse back 2 car lengths
5. Check all mirrors and blind spots
6. Signal left and move off when safe

### 5. Emergency Stop
**What you'll be asked to do:**
- Stop the car as quickly and safely as possible
- When instructed by the examiner

**Steps:**
1. Drive at about 20 mph
2. Examiner will say "STOP!" and raise their hand
3. Brake firmly and steer straight
4. Apply the handbrake when stopped
5. Select neutral
6. When ready, check all mirrors and blind spots before moving off

**Common Mistakes:**
- Not braking firmly enough
- Steering while braking
- Not checking before moving off again

## General Tips

1. **Practice each manoeuvre** until you're confident
2. **Take your time** - Speed doesn't matter, accuracy does
3. **Check mirrors constantly** - Show the examiner you're aware
4. **Don't panic** - If something goes wrong, correct it calmly
5. **Ask for clarification** - If you're not sure what to do, ask
`,
      },
    },
  },

  // Language Tests - Complete CEFR
  'language-tests': {
    'cefr-levels': {
      'a2-elementary': {
        title: 'A2 Elementary Level',
        content: `# A2 Elementary Level

## Overview
The A2 level is the second level of CEFR. At this level, you can understand sentences and frequently used expressions related to areas of immediate relevance.

## What You Can Do

### Listening
- Understand phrases and high-frequency vocabulary
- Understand short, simple conversations
- Catch the main point in short, clear messages

### Reading
- Read very short, simple texts
- Find specific information in everyday material
- Understand short personal letters and emails

### Speaking
- Communicate in simple, routine tasks
- Describe your background, immediate environment, and matters in areas of immediate need
- Handle short social exchanges

### Writing
- Write short, simple notes and messages
- Write a very simple personal letter
- Fill in forms with personal details

## Vocabulary Topics

### Home and Family
- Furniture, rooms, housework
- Family relationships
- Daily routines at home

### Work and School
- Job descriptions
- School subjects
- Classroom instructions

### Shopping and Services
- Clothing sizes and colors
- Food and drink items
- Money and prices

### Travel and Directions
- Transport options
- Asking for and giving directions
- Booking accommodation

### Health and Body
- Body parts
- Common illnesses
- At the pharmacy

## Grammar Points

### Past Tense
- Regular past tense (-ed)
- Common irregular past forms
- Talking about past events

### Future Forms
- Going to future
- Present continuous for future
- Will for predictions

### Comparatives and Superlatives
- More/most adjectives
- Irregular forms (good/better/best)

### Prepositions
- Time prepositions (at, in, on)
- Place prepositions (in, on, at, under, behind)

## Practice Exercises

### Exercise 1: Daily Routine
Write 5 sentences about what you did yesterday using past tense.

### Exercise 2: Shopping Dialogue
Practice a conversation at a clothing store:
- "Do you have this in blue?"
- "What size do you need?"
- "That will be $25, please."

### Exercise 3: Health
Describe your symptoms to a doctor:
- "I have a headache"
- "My stomach hurts"
- "I feel dizzy"

## Exam Tips

1. **Use simple sentences** - Don't try to be too complex
2. **Practice common phrases** - They come up frequently
3. **Listen to slow English** - Podcasts for learners
4. **Read children's books** - Good for vocabulary
5. **Write daily** - Even a short diary entry helps
`,
      },
      'b1-intermediate': {
        title: 'B1 Intermediate Level',
        content: `# B1 Intermediate Level

## Overview
The B1 level is the third level of CEFR. At this level, you can deal with most situations likely to arise while travelling and produce connected text on familiar topics.

## What You Can Do

### Listening
- Understand the main points of clear standard speech
- Understand radio or TV programmes on familiar topics
- Understand the main point of many radio or TV programmes

### Reading
- Understand texts that consist mainly of high-frequency everyday language
- Understand the description of events, feelings, and wishes in personal letters
- Understand articles and reports concerned with contemporary problems

### Speaking
- Deal with most situations likely to arise whilst travelling
- Enter unprepared into conversation on familiar topics
- Connect phrases in a simple way
- Describe experiences and events, dreams, hopes, and ambitions
- Briefly give reasons and explanations for opinions and plans

### Writing
- Write simple connected text on topics which are familiar
- Write personal letters describing experiences and impressions
- Write short, simple notes and messages

## Vocabulary Topics

### Education and Work
- Job applications
- Work responsibilities
- Training and courses

### Media and Culture
- Newspaper articles
- TV programmes
- Cultural events

### Abstract Topics
- Opinions and arguments
- Hypothetical situations
- Future plans

### Travel and Experiences
- Travel stories
- Describing places
- Cultural differences

## Grammar Points

### Conditionals
- Zero conditional (general truths)
- First conditional (real future)
- Second conditional (hypothetical present)

### Passive Voice
- Present simple passive
- Past simple passive
- Future passive

### Reported Speech
- Statements
- Questions
- Commands

### Linking Words
- Although, despite, however
- Because, since, as
- Therefore, consequently

## Practice Exercises

### Exercise 1: Opinion Writing
Write a paragraph giving your opinion on: "Should school uniforms be mandatory?"

### Exercise 2: Travel Story
Write about a memorable trip you took. Include:
- Where you went
- What you did
- How you felt

### Exercise 3: Job Application
Write a cover letter for a job application:
- Why you're interested
- Your relevant experience
- Your availability

## Exam Tips

1. **Read news articles** - Good for vocabulary and structure
2. **Watch TV with subtitles** - Helps with listening
3. **Keep a journal** - Practice writing regularly
4. **Have conversations** - Find a language partner
5. **Use linking words** - Makes your writing more connected
`,
      },
      'b2-upper-intermediate': {
        title: 'B2 Upper Intermediate Level',
        content: `# B2 Upper Intermediate Level

## Overview
The B2 level is the fourth level of CEFR. At this level, you can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible.

## What You Can Do

### Listening
- Understand extended speech and lectures
- Follow even complex lines of argument provided the topic is reasonably familiar
- Understand most TV news, current affairs programmes, and films

### Reading
- Read articles and reports concerned with contemporary problems
- Understand contemporary literary prose
- Recognise the line of argument in the treatment of the issue presented

### Speaking
- Interact with native speakers with a degree of fluency and spontaneity
- Present clear, detailed descriptions on a wide range of subjects
- Explain a viewpoint on a topical issue giving the advantages and disadvantages
- Develop an argument systematically with appropriate highlighting of significant points

### Writing
- Write clear, detailed text on a wide range of subjects
- Write an essay or report, passing on information or giving reasons in support of or against a particular point of view
- Write letters highlighting the personal significance of events and experiences

## Vocabulary Topics

### Academic Language
- Abstract concepts
- Technical terminology
- Formal register

### Professional Communication
- Meetings and negotiations
- Presentations
- Written reports

### Current Affairs
- Social issues
- Environmental concerns
- Economic topics

### Cultural Literature
- Literary references
- Idiomatic expressions
- Collocations

## Grammar Points

### Advanced Conditionals
- Third conditional (past hypothetical)
- Mixed conditionals
- Inversion for emphasis

### Advanced Tenses
- Perfect continuous tenses
- Future perfect
- Narrative tenses

### Modality
- Deduction and speculation
- Obligation and necessity
- Past modals

### Discourse Markers
- Formal connectors
- Hedging language
- Emphasis structures

## Practice Exercises

### Exercise 1: Essay Writing
Write a 250-word essay on: "The impact of technology on education"

### Exercise 2: Debate Preparation
Prepare arguments for and against: "University education should be free"

### Exercise 3: Report Writing
Write a report on a workplace issue, including:
- Problem description
- Analysis of causes
- Recommended solutions

## Exam Tips

1. **Read academic articles** - Builds vocabulary
2. **Watch documentaries** - Good for listening
3. **Practice presentations** - Improves speaking
4. **Write formal emails** - Practices register
5. **Use collocations** - Sounds more natural
`,
      },
      'c1-advanced': {
        title: 'C1 Advanced Level',
        content: `# C1 Advanced Level

## Overview
The C1 level is the fifth level of CEFR. At this level, you can understand a wide range of demanding, longer texts, and recognise implicit meaning.

## What You Can Do

### Listening
- Understand extended speech even when it is not clearly structured
- Understand TV programmes and films without visual support
- Understand lengthy complex technical instructions, including instructions for a system or programme they are not familiar with

### Reading
- Understand long and complex factual and literary texts
- Distinguish style and tone in articles, reports, and reviews
- Read technical instructions and longer texts efficiently

### Speaking
- Express yourself fluently and spontaneously without much obvious searching for expressions
- Use language flexibly and effectively for social, academic, and professional purposes
- Produce clear, well-structured, detailed text on complex subjects

### Writing
- Express yourself clearly and at length on complex subjects
- Write essays, reports, and articles which develop an argument systematically
- Write personal letters emphasising the significance of events and experiences

## Vocabulary Topics

### Academic and Professional
- Specialized terminology
- Abstract concepts
- Formal and informal registers

### Cultural and Literary
- Literary references
- Cultural allusions
- Idiomatic expressions

### Technical and Scientific
- Research methodology
- Statistical terminology
- Technical documentation

## Grammar Points

### Advanced Structures
- Inverted conditionals
- Cleft sentences
- Fronting and inversion

### Advanced Tenses
- Perfect aspect in all tenses
- Future perfect continuous
- Past perfect continuous passive

### Advanced Modality
- Epistemic modality
- Deontic modality
- Dynamic modality

### Discourse Structure
- Cohesion devices
- Paragraph structure
- Argumentation patterns

## Practice Exercises

### Exercise 1: Academic Writing
Write a 400-word essay analyzing a complex issue in your field.

### Exercise 2: Presentation
Prepare and deliver a 10-minute presentation on a technical topic.

### Exercise 3: Formal Correspondence
Write a formal letter of complaint or inquiry.

## Exam Tips

1. **Read academic journals** - Builds specialized vocabulary
2. **Listen to lectures** - Good for complex listening
3. **Practice formal writing** - Essays and reports
4. **Engage in debates** - Improves fluency
5. **Use advanced grammar** - Shows range
`,
      },
      'c2-proficiency': {
        title: 'C2 Proficiency Level',
        content: `# C2 Proficiency Level

## Overview
The C2 level is the highest level of CEFR. At this level, you can understand with ease virtually everything heard or read.

## What You Can Do

### Listening
- Understand any kind of spoken language at natural speed
- Understand extended speech even when it is not clearly structured
- Understand TV programmes, films, and lectures without visual support

### Reading
- Read with ease virtually all forms of the written language
- Understand abstract, structurally complex texts such as technical articles and literary works
- Recognise stylistic differences in register

### Speaking
- Express yourself spontaneously, very fluently, and precisely
- Differentiate finer shades of meaning even in complex situations
- Summarise information from different sources, reconstructing arguments in a coherent presentation

### Writing
- Write clear, well-structured text in an appropriate style
- Write complex reports, articles, and essays
- Write summaries and reviews of professional or literary works

## Vocabulary Topics

### Advanced Academic
- Specialized terminology across disciplines
- Abstract and philosophical concepts
- Technical jargon

### Literary and Cultural
- Literary allusions
- Cultural references
- Historical context

### Professional and Technical
- Industry-specific terminology
- Legal and regulatory language
- Scientific and technical writing

## Grammar Points

### Masterful Structures
- Subjunctive mood
- Advanced passive constructions
- Complex noun phrases

### Stylistic Range
- Formal and informal registers
- Academic and creative writing
- Technical and general language

### Idiomatic Mastery
- Proverbs and sayings
- Idiomatic expressions
- Colloquial language

## Practice Exercises

### Exercise 1: Literature Review
Write a 500-word review of a professional or literary work.

### Exercise 2: Technical Report
Write a detailed technical report on a complex topic.

### Exercise 3: Formal Presentation
Prepare and deliver a 20-minute presentation on an academic topic.

## Exam Tips

1. **Read widely** - Books, journals, newspapers
2. **Listen to podcasts** - Various topics and accents
3. **Write regularly** - Practice different styles
4. **Engage in discussions** - Debate complex topics
5. **Study etymology** - Deepens word understanding
`,
      },
    },
  },

  // Civics Tests - Complete Coverage
  'civics-tests': {
    'us-citizenship': {
      'english-test': {
        title: 'US Citizenship English Test',
        content: `# US Citizenship English Test

## Overview
The English test has three parts: speaking, reading, and writing. You must demonstrate basic English ability.

## Speaking Test

### What the Examiner Does
- Asks you questions about your N-400 application
- Tests your ability to speak and understand English

### Common Questions
1. What is your name?
2. Where do you live?
3. What is your date of birth?
4. Are you married?
5. Do you have children?
6. Where were you born?
7. What is your mother's name?
8. What is your father's name?
9. When did you come to the United States?
10. Are you a citizen of any other country?

### Tips
- Speak clearly and naturally
- Answer completely but briefly
- Don't memorize answers
- Ask for clarification if needed

## Reading Test

### What You Do
- Read one sentence out of three
- Must read correctly to pass

### Practice Sentences

**Easy:**
1. "Who was the first President of the United States?"
2. "What is the capital of the United States?"
3. "When do we celebrate Independence Day?"

**Medium:**
1. "What are the three branches of government?"
2. "What did the Declaration of Independence do?"
3. "Who lived in America before the Europeans arrived?"

**Hard:**
1. "What is the supreme law of the land?"
2. "What do we call the first ten amendments to the Constitution?"
3. "How many amendments does the Constitution have?"

### Tips
- Practice reading aloud daily
- Focus on pronunciation of difficult words
- Read newspapers and books

## Writing Test

### What You Do
- Write one sentence out of three
- Must write correctly to pass

### Practice Sentences

**Easy:**
1. "New York is a big city."
2. "I live in California."
3. "The President lives in the White House."

**Medium:**
1. "Washington was the first President."
2. "We vote in November."
3. "The Constitution has 27 amendments."

**Hard:**
1. "The President is in the executive branch."
2. "We celebrate Independence Day in July."
3. "Immigrants come to the United States for freedom."

### Tips
- Practice writing daily
- Focus on spelling and grammar
- Write simple sentences

## Study Plan

### Week 1-2: Speaking
- Practice N-400 questions
- Record yourself speaking
- Listen and improve

### Week 3-4: Reading
- Read practice sentences aloud
- Focus on pronunciation
- Build vocabulary

### Week 5-6: Writing
- Write practice sentences
- Focus on spelling
- Practice daily

### Week 7-8: Review
- Take full practice tests
- Identify weak areas
- Final preparation
`,
      },
    },
  },
}

// Generate content files
for (const [siteName, topics] of Object.entries(CONTENT)) {
  for (const [topicName, pages] of Object.entries(topics)) {
    for (const [pageName, pageData] of Object.entries(pages)) {
      const dir = join('sites', siteName, 'src', 'content', 'docs', topicName)
      mkdirSync(dir, { recursive: true })
      
      const filePath = join(dir, `${pageName}.md`)
      const content = `---
title: ${pageData.title}
description: "${pageData.title} - Complete study guide and practice questions"
date: 2026-01-01T00:00:00Z
tags:
  - test-prep
  - ${siteName}
---

${pageData.content}
`
      
      writeFileSync(filePath, content)
      console.log(`Created: ${filePath}`)
    }
  }
}

console.log('\nContent expansion complete!')
