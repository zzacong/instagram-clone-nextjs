import { type ReactNode, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal({ isOpen, onClose, children }: Props) {
  return (
    <Transition as={Fragment} show={isOpen}>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="fixed inset-0 z-20 overflow-y-auto px-4"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/80" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 -translate-y-8"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-300"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-8"
        >
          {children}
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}
