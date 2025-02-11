import { motion } from 'framer-motion';

const AnimatedSVG = () => {
    return (
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_609_13552)">
                {/* First Eye */}
                <motion.path
                    d="M8.88996 7.87348C9.31482 9.20182 9.71303 10.5381 10.0846 11.8823C10.1373 12.0591 10.204 12.1468 10.3994 12.1791C10.6139 12.2171 10.9033 12.1365 11.0966 12.045C11.3523 11.9291 11.6131 11.7722 11.7974 11.5531C11.9097 11.4234 12.1137 11.1927 12.0595 11.0107C11.6654 9.57133 11.2377 8.13627 10.7797 6.71593C10.7332 6.55994 10.4105 6.54853 10.2977 6.5595C10.0423 6.57899 9.7531 6.69915 9.54247 6.82985C9.19652 7.05183 8.73762 7.42069 8.88153 7.86467L8.88996 7.87348Z"
                    fill="#CEEF08"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 1, 0], // Fade in, stay visible, then abruptly disappear
                    }}
                    transition={{
                        duration: 4, // Total duration of the animation
                        delay: 0.5, // Delay before the first eye appears
                        repeat: Infinity, // Loop infinitely
                        repeatDelay: 2, // Pause before restarting the loop
                        times: [0, 0.25, 0.75, 1], // Keyframe timing (0% -> 25% -> 75% -> 100%)
                    }}
                />
                {/* Second Eye */}
                <motion.path
                    d="M14.8142 5.66649L15.9269 9.6148C15.9796 9.79158 16.0463 9.87925 16.2417 9.91161C16.4562 9.9496 16.7456 9.86902 16.9389 9.77745C17.1946 9.66163 17.4554 9.50464 17.6397 9.28555C17.7467 9.15744 17.9561 8.9252 17.9018 8.74322L16.7891 4.79491C16.7364 4.61813 16.6697 4.53045 16.4743 4.4981C16.2598 4.46011 15.9704 4.54069 15.7771 4.63225C15.5214 4.74808 15.2606 4.90507 15.0763 5.12416C14.9693 5.25227 14.7599 5.48451 14.8142 5.66649Z"
                    fill="#CEEF08"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 1, 0], // Fade in, stay visible, then abruptly disappear
                    }}
                    transition={{
                        duration: 4, // Total duration of the animation
                        delay: 1, // Delay before the second eye appears
                        repeat: Infinity, // Loop infinitely
                        repeatDelay: 2, // Pause before restarting the loop
                        times: [0, 0.25, 0.75, 1], // Keyframe timing (0% -> 25% -> 75% -> 100%)
                    }}
                />
                {/* Mouth */}
                <motion.path
                    d="M3.92143 22.1312C7.67354 24.4381 12.2738 24.9751 16.6083 24.1137C20.9428 23.2523 25.2554 20.6424 28.3558 17.2955C30.1337 15.373 31.5656 13.1857 32.6841 10.8426C32.9257 10.329 32.1859 10.3004 31.8789 10.3806C31.3221 10.5182 30.813 10.9133 30.5698 11.4217C28.8894 14.9569 26.2696 18.1832 22.8981 20.3089C19.5266 22.4345 15.7342 23.2646 11.9053 22.8034C9.69629 22.5389 7.59809 21.8281 5.71747 20.6788C5.05058 20.2718 3.16354 21.672 3.9161 22.1328L3.92143 22.1312Z"
                    fill="#CEEF08"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{
                        x: [-50, 0, 0, 0], // Slide in, stay in place, then abruptly reset
                        opacity: [0, , 1, 0], // Fade in, stay visible, then abruptly disappear
                    }}
                    transition={{
                        duration: 4, // Total duration of the animation
                        delay: 1, // Delay before the mouth appears
                        repeat: Infinity, // Loop infinitely
                        repeatDelay: 2, // Pause before restarting the loop
                        times: [0, 0.25, 0.75, 1], // Keyframe timing (0% -> 25% -> 75% -> 100%)
                    }}
                />
            </g>
            <defs>
                <clipPath id="clip0_609_13552">
                    <rect width="31" height="19" fill="white" transform="translate(0 9.32227) rotate(-16.5939)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default AnimatedSVG;