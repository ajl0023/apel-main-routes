import { writable } from "svelte/store";

import gsap from "gsap";
import { distance } from "../../../../_stores/utils";

const store = () => {
  const state = {
    exited: [],
    exiting: false,
    shouldReturn: false,
    zIndex: [],

    zIndexNum: 1,
    returnedCards: [],
    cardToExit: null,
    currentStack: [5, 4, 3, 2, 1, 0],
  };
  const { subscribe, set, update } = writable(state);
  const methods = {
    init(outline) {
      set({
        outline,
        exited: [],
        shouldReturn: false,
        zIndex: [],

        zIndexNum: 1,
        cardToExit: null,
        returnedCards: [],

        currentStack: [5, 4, 3, 2, 1, 0],
      });
    },
    exit(i) {
      update((s) => {
        s.exited.push(i);
        s.currentStack = s.currentStack.filter((f) => {
          return f !== i;
        });

        return s;
      });
    },

    reset() {
      update((s) => {
        s.shouldReturn = true;

        s.exited = [];
        s.currentStack = [5, 4, 3, 2, 1, 0];
        s.cardToExit = null;

        return s;
      });
    },
    introAnim() {
      gsap.to(".meet-the-team-card", {
        y: 0,
        delay: 1.2,
        stagger: -0.2,
        duration: 0.5,
      });
    },
    reenable(i) {
      update((s) => {
        const copy = {
          ...s,
        };
        copy.returnedCards.push(i);

        if (copy.returnedCards.length === 6) {
          copy.shouldReturn = false;
          copy.returnedCards = [];
        }

        return copy;
      });
    },

    returnCard(i) {
      update((s) => {
        s.exited = s.exited.filter((f) => {
          return f !== i;
        });

        s.currentStack = [...s.currentStack, i];
        s.cardToExit = null;

        return s;
      });
    },

    resetStore() {},

    manualExit() {
      update((s) => {
        if (!s.shouldReturn) {
          const indexToExit = s.currentStack[s.currentStack.length - 1];
          s.cardToExit = indexToExit;
        }
        return s;
      });
    },
    getExitLocation(ele, index) {
      const outLinePosition = state.outline.getBoundingClientRect();
      const stackPosition = ele.getBoundingClientRect();
      const distanceRes = distance(
        outLinePosition.x,
        stackPosition.x,
        outLinePosition.y,
        stackPosition.y
      );

      return distanceRes;
    },
  };
  return {
    subscribe,
    set,
    update,
    ...methods,
  };
};
export const cardStore = store();
