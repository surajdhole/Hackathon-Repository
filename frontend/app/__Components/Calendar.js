'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'// a plugin!
import Image from 'next/image'

export default function Calendar() {
  return (
    <Image
    src="/Calendar.svg"
    alt="Calendar"
    // className="dark:invert"
    className="mb-2 text-center"
    width={430}
    height={350}
    priority
  />

  )
}

