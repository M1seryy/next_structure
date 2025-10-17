import type { FC } from 'react'
import { MyIqSection } from '@/app/shared/ui'
import { MyIqSectionHeading } from '@/app/shared/ui/my-iq/section-heading'
import { MyIqCheckListItem } from '@/app/shared/ui/my-iq/check-list-item'
import { MyIqAbilityCard } from '@/app/shared/ui/my-iq/ability-card'

// props
interface IProps {}

// component
const IqAbilitiesComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <MyIqSection innerClassName='py-12'>
      <MyIqSectionHeading
        title='Boost Your Abilities'
        description='Unlock your potential with our comprehensive training package'
      />

      <div className='mt-8 grid gap-6 md:grid-cols-3'>
        <MyIqAbilityCard number={1} title='Expert Video Courses'>
          <MyIqCheckListItem>20+ hours of expert training</MyIqCheckListItem>
          <MyIqCheckListItem>Easy-to-follow lessons</MyIqCheckListItem>
          <MyIqCheckListItem>Learn at your own pace</MyIqCheckListItem>
          <MyIqCheckListItem>Track your progress</MyIqCheckListItem>
        </MyIqAbilityCard>

        <MyIqAbilityCard number={2} title='Brain Training Games'>
          <MyIqCheckListItem>Diverse cognitive training exercises</MyIqCheckListItem>
          <MyIqCheckListItem>Progressive difficulty levels</MyIqCheckListItem>
          <MyIqCheckListItem>
            Enhance 5 core mental skills: Memory, Logical reasoning, problem‑solving mastery, focus and concentration.
          </MyIqCheckListItem>
        </MyIqAbilityCard>

        <MyIqAbilityCard number={3} title='Puzzles'>
          <MyIqCheckListItem>150+ Intelligence‑Boosting Puzzles</MyIqCheckListItem>
          <MyIqCheckListItem>Smart Difficulty Progression</MyIqCheckListItem>
          <MyIqCheckListItem>
            Master essential brain functions: Pattern Recognition, Strategic Thinking, Analytical Reasoning.
          </MyIqCheckListItem>
        </MyIqAbilityCard>
      </div>
    </MyIqSection>
  )
}

export default IqAbilitiesComponent
