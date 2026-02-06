import { faker } from '@faker-js/faker'
import type { Event } from '../types'

export const generateMockEvents = (count: number): Event[] => {
    const events: Event[] = []

    faker.seed(123)

    for (let i = 0; i < count; i++) {
        events.push({
            id: faker.string.uuid(),
            title: faker.company.catchPhrase(),
            date: faker.date.soon({ days: 60 }).toISOString(),
            description: faker.lorem.sentence(),
        })
    }

    return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}
