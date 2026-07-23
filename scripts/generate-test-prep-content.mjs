#!/usr/bin/env node

/**
 * generate-test-prep-content.mjs -- Generates content for test preparation sites.
 *
 * Creates detailed content files for:
 * - Driving tests (DVLA, DMV, etc.)
 * - Language tests (A1-C2)
 * - Governmental tests (civics, citizenship)
 *
 * Usage:
 *   node scripts/generate-test-prep-content.mjs
 */

import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const CONTENT = {
  // UK Driving Test
  'driving-uk': {
    'theory-test': {
      'traffic-signs': {
        title: 'Traffic Signs',
        content: `# Traffic Signs

## Regulatory Signs

### Speed Limit Signs
- **Speed Limit**: Maximum speed allowed
- **Minimum Speed**: Minimum speed required
- **End of Restriction**: End of speed limit zone

### Prohibition Signs
- **No Entry**: Vehicles not permitted
- **No Right Turn**: Right turn prohibited
- **No Left Turn**: Left turn prohibited
- **No U-Turn**: U-turn prohibited
- **No Overtaking**: Overtaking prohibited

### Mandatory Signs
- **Turn Left**: Must turn left
- **Turn Right**: Must turn right
- **Go Straight Only**: Must continue straight

## Warning Signs

### Road Layout
- **Sharp Bend**: Road curves sharply
- **Narrow Road**: Road becomes narrow
- **Dual Carriageway Ends**: Dual carriageway ends
- **Level Crossing**: Railway crossing ahead

### Hazards
- **Slippery Road**: Road surface may be slippery
- **Road Works**: Construction ahead
- **Traffic Lights**: Traffic signals ahead
- **Pedestrian Crossing**: Crossing ahead

## Information Signs

### Direction Signs
- **Motorway Signs**: Blue background
- **Primary Route**: Green background
- **Local Route**: White background

### Tourist Signs
- **Tourist Attraction**: Brown background
- **Hospital**: Blue H sign
- **Parking**: Blue P sign

## Common Exam Questions

1. What does a red circle with a white background indicate?
   - Regulatory sign (prohibition or restriction)

2. What does a blue circle indicate?
   - Mandatory instruction

3. What does a triangle indicate?
   - Warning sign

4. What does a blue rectangle indicate?
   - Information or direction

## Practice Questions

### Question 1
What does this sign mean? (Speed Limit 30)
- Maximum speed of 30 mph
- Minimum speed of 30 mph
- Average speed of 30 mph
- End of speed limit

**Correct Answer:** Maximum speed of 30 mph

### Question 2
What does this sign mean? (No Entry)
- No entry for vehicles
- No parking
- No stopping
- No overtaking

**Correct Answer:** No entry for vehicles
`,
      },
      'road-rules': {
        title: 'Road Rules',
        content: `# Road Rules

## The Highway Code

### Priority Rules
1. **Give way to traffic on the right** at roundabouts
2. **Give way to pedestrians** at zebra crossings
3. **Give way to emergency vehicles** when they approach
4. **Give way to traffic on the major road** at junctions

### Speed Limits
- **20 mph**: Residential areas, near schools
- **30 mph**: Urban roads with street lighting
- **50 mph**: Single carriageway roads
- **60 mph**: Dual carriageways
- **70 mph**: Motorways

### Lane Discipline
- **Keep left** unless overtaking
- **Use correct lane** for your destination
- **Signal before changing lanes**
- **Check mirrors** before any maneuver

## Road Markings

### White Lines
- **Solid white line**: Do not cross
- **Broken white line**: May cross if safe
- **Double broken white line**: Lane separation

### Yellow Lines
- **Single yellow line**: Restrictions apply at certain times
- **Double yellow line**: No waiting at any time
- **Yellow zig-zags**: No stopping (near schools, crossings)

## Common Exam Questions

1. When must you use your headlights?
   - Between sunset and sunrise
   - In poor visibility
   - When approaching a junction

2. What is the legal minimum tread depth?
   - 1.6mm across the central three-quarters

3. When should you use your hazard lights?
   - When stationary and warning of a hazard
   - When driving in a convoy
   - When parking on a single yellow line

## Practice Questions

### Question 1
What is the speed limit on a single carriageway road?
- 30 mph
- 50 mph
- 60 mph
- 70 mph

**Correct Answer:** 60 mph

### Question 2
When must you give way to traffic on the right?
- At roundabouts
- At traffic lights
- On motorways
- On dual carriageways

**Correct Answer:** At roundabouts
`,
      },
    },
  },

  // Language Tests
  'language-tests': {
    'cefr-levels': {
      'a1-beginner': {
        title: 'A1 Beginner',
        content: `# A1 Beginner Level

## Overview
The A1 level is the first level of the Common European Framework of Reference for Languages (CEFR). At this level, you can understand and use familiar everyday expressions and basic phrases.

## What You Can Do

### Listening
- Understand very short, simple questions
- Recognize familiar words and basic phrases
- Understand slow and clear speech

### Reading
- Understand familiar names, words, and very simple sentences
- Read short, simple texts
- Understand basic forms (e.g., hotel registration forms)

### Speaking
- Introduce yourself and others
- Ask and answer basic personal questions
- Interact in a simple way
- Use basic greetings and farewells

### Writing
- Write a short, simple postcard
- Fill in forms with personal information
- Write simple phrases and sentences

## Vocabulary Topics

### Personal Information
- Name, age, nationality, address
- Family members
- Jobs and professions

### Daily Routine
- Wake up, eat, go to work/school
- Times of the day
- Days of the week, months

### Shopping
- Numbers, prices
- Common items (food, clothes, household)
- Basic phrases (How much? Where is?)

### Travel
- Directions (left, right, straight)
- Transportation (bus, train, taxi)
- Accommodation (hotel, room, key)

## Grammar Points

### Present Tense
- Regular verb conjugation
- Common irregular verbs (be, have, do, go)

### Basic Sentence Structure
- Subject + Verb + Object
- Questions (What? Where? When? How?)
- Negation (not, no)

### Articles and Gender
- Definite and indefinite articles
- Gender of nouns (masculine, feminine, neuter)

## Practice Exercises

### Exercise 1: Self-Introduction
Write a short paragraph introducing yourself. Include:
- Your name
- Your age
- Your nationality
- Your job

### Exercise 2: Shopping Dialogue
Practice asking and answering:
- How much is this?
- Do you have this in blue?
- Where is the fitting room?

### Exercise 3: Directions
Practice giving simple directions:
- Go straight
- Turn left/right
- It's on the left/right

## Exam Tips

1. **Practice speaking daily** - Even 10 minutes helps
2. **Learn common phrases** - Focus on high-frequency vocabulary
3. **Use flashcards** - For vocabulary retention
4. **Listen to simple audio** - Children's shows, basic podcasts
5. **Write daily** - Keep a simple journal
`,
      },
    },
  },

  // Civics Tests
  'civics-tests': {
    'us-citizenship': {
      'civics-questions': {
        title: 'US Civics Questions',
        content: `# US Civics Questions

## Overview
The US citizenship test includes 100 civics questions. You must answer 6 out of 10 questions correctly to pass.

## Government

### Principles of American Democracy
1. What is the supreme law of the land?
   - The Constitution

2. What do we call the first ten amendments to the Constitution?
   - The Bill of Rights

3. What is one right or freedom from the First Amendment?
   - Speech, religion, press, assembly, petition

4. How many amendments does the Constitution have?
   - 27

5. What did the Declaration of Independence do?
   - Announced our independence from Great Britain

### System of Government
6. What are the three branches of government?
   - Legislative, Executive, Judicial

7. What part of the government makes the laws?
   - Congress (Legislative)

8. What are the two parts of the U.S. Congress?
   - Senate and House of Representatives

9. How many U.S. Senators are there?
   - 100

10. We elect a President for how many years?
    - Four years

### Rights and Responsibilities
11. What is one responsibility that is only for United States citizens?
    - Serve on a jury, vote in a federal election

12. What are two ways that Americans can participate in their democracy?
    - Vote, join a political party, help with a campaign, run for office

13. When must all men register for the Selective Service?
    - At age 18

## History

### Colonial Period and Independence
14. What is one reason colonists came to America?
    - Freedom, political liberty, religious freedom, economic opportunity

15. Who lived in America before the Europeans arrived?
    - Native Americans (American Indians)

16. What group of people was taken to America and sold as slaves?
    - Africans

### 1800s
17. What was one important thing that Abraham Lincoln did?
    - Freed the slaves, saved the Union, led the country during the Civil War

18. What did the Emancipation Proclamation do?
    - Freed the slaves in the Confederacy

19. What did Susan B. Anthony do?
    - Fought for women's rights

### Recent History
20. What movement tried to end racial discrimination?
    - Civil rights movement

21. What did Martin Luther King Jr. do?
    - Fought for civil rights through nonviolent protest

22. Who was President during World War I?
    - Woodrow Wilson

23. Who was President during World War II?
    - Franklin Roosevelt

24. What was the Great Depression?
    - A long period of economic downturn in the 1930s

25. Who did the United States fight in World War II?
    - Japan, Germany, and Italy

## Integration

### Holidays
26. When do we celebrate Independence Day?
    - July 4

27. Name two national U.S. holidays.
    - New Year's Day, Martin Luther King Jr. Day, Presidents' Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas

### Symbols
28. What is the name of the national anthem?
    - The Star-Spangled Banner

29. Why does the flag have 50 stars?
    - Because there are 50 states

30. What do the stripes on the flag represent?
    - The original 13 colonies

## Practice Test

### Part 1: Multiple Choice
1. What is the supreme law of the land?
   a) The Declaration of Independence
   b) The Constitution
   c) The Bill of Rights
   d) The Emancipation Proclamation

**Correct Answer:** b) The Constitution

2. How many U.S. Senators are there?
   a) 50
   b) 100
   c) 435
   d) 535

**Correct Answer:** b) 100

### Part 2: Written Answers
1. What is one right from the First Amendment?
2. What are the three branches of government?
3. Who was President during World War II?

## Study Tips

1. **Study a little every day** - Don't cram
2. **Use flashcards** - For memorization
3. **Practice with a friend** - Quiz each other
4. **Watch videos** - Visual learning helps
5. **Take practice tests** - Simulate exam conditions
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

console.log('\nContent generation complete!')
