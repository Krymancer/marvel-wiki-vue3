import { shallowMount } from '@vue/test-utils';
import Main from '@/components/Home/Main.vuen.vue';

describe('Main.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Main, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
