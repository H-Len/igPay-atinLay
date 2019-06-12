# Pig Latin Converter

## By _Hannah and Hugh_

#### Specs

| Behavior | Input | Output |
| -------- | ----- | ------ |
| For words beginning with a vowel, add "way" to the end. | oak | oak-way |
| For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay". | Banana | anana-bay |
| If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first! | quilt | ilt-quay |
| For words beginning with "y", treat "y" as a consonant. | yes | es-yay |





## Bugs

* numbers (we will need to add "isLetter" method to rule this out)
* double initial consonants split
* commas cause issues (may be resolved with logic that only looks at letters or spaces)
